// import { createClient } from "@/lib/supabase/server";

// export async function fetchPortfolioProjects() {
//     const supabase = await createClient();
    
//     // Note the parentheses for the category join
//     const { data, error } = await supabase
//         .from('portfolio_projects')
//         .select(`
//             title, 
//             description, 
//             tags, 
//             category(name), 
//             link, 
//             github
//         `);

//     if (error) {
//         console.error('SYSTEM_ERROR // Data fetch failed:', error.message);
//         return null;
//     }

//     // This flattens the category name so it's easier to use in your UI
//     return data.map(project => ({
//         ...project,
//         category: Array.isArray(project.category) 
//             ? project.category[0]?.name 
//             : (project.category as any)?.name
//     }));
// }

import { createClient } from "@/lib/supabase/server";

export async function fetchPortfolioProjects() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('portfolio_projects')
        .select(`
                id,
                title, 
                description, 
                tags, 
                category(name), 
                link, 
                github,
                portfolio_images(
                url, 
                index
                )
            `)
        // Optional: Order images so primary comes first
        .order('index', { foreignTable: 'portfolio_images', ascending: true });
    // Debug log to verify image data structure
    if (error) {
        console.error('SYSTEM_ERROR // Data fetch failed:', error.message);
        return null;
    }

    // Done by abdul ahad on 28/10/2026 for adding vibecart.com
    // Reason: PostgreSQL returns rows in arbitrary heap order when no ORDER BY is specified on the main table,
    // causing updated or newly inserted projects to shift around unpredictably.
    // This custom sort ensures our chosen priority projects appear first in the exact desired sequence,
    // while keeping the remaining projects in their original retrieved order.
    const PRIORITY_IDS = [2, 17, 8, 9, 12, 11];

    const sortedData = [...data].sort((a, b) => {
        const aIndex = PRIORITY_IDS.indexOf(Number(a.id));
        const bIndex = PRIORITY_IDS.indexOf(Number(b.id));

        if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
        if (aIndex !== -1) return -1;
        if (bIndex !== -1) return 1;
        return 0;
    });

    /* [Original code before priority ordering - replaced by abdul ahad on 28/10/2026]
    return data.map(project => {

        return {
            ...project,
            // 2. Flatten Category
            category: Array.isArray(project.category)
                ? project.category[0]?.name
                : (project.category as any)?.name,

            // 4. Keep all images if you want to build a gallery later
            // allImages: project.portfolio_images?.map((img: any) => img.url) || []
        };
    });
    */

    return sortedData.map(project => {

        return {
            ...project,
            // 2. Flatten Category
            category: Array.isArray(project.category)
                ? project.category[0]?.name
                : (project.category as any)?.name,

            // 4. Keep all images if you want to build a gallery later
            // allImages: project.portfolio_images?.map((img: any) => img.url) || []
        };
    });
}