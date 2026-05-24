import { createClient } from "@/lib/supabase/server";

export async function fetchPortfolioProject(params: { id: string }) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('portfolio_projects')
        // FIX 1: Use .select() instead of .selectSingle()
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
        .eq('id', params.id)
        .order('index', { foreignTable: 'portfolio_images', ascending: true })
        // FIX 2: Chain .single() to tell Supabase to return one object, not an array
        .single(); 

    if (error) {
        console.error('SYSTEM_ERROR // Data fetch failed:', error.message);
        return null;
    }

    // FIX 3: Since 'data' is now a single object, we don't need .map(). 
    // We just format and return the data object directly.
    return {
        ...data,
        // Flatten Category
        category: Array.isArray(data.category)
            ? data.category[0]?.name
            : (data.category as any)?.name,
            
        // Keep all images if you want to build a gallery later
        allImages: data.portfolio_images?.map((img: any) => img.url) || []
    };
}