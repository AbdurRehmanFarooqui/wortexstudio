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
}