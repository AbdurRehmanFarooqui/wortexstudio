import { fetchPortfolioProjects } from "./actions";
import PortfolioGrid from "@/app/components/PortfolioGrid";

export default async function PortfolioPage() {
  // 1. Fetch data on the server
  const projects = await fetchPortfolioProjects();
  console.log('Fetched projects:', projects); // Debug log to verify data structure
 
  return (
    <div className="w-full min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* 2. Pass data to the Client Component */}
        <PortfolioGrid initialProjects={projects || []} />

        <div className="mt-20 text-center">
          <button className="group relative px-8 py-4 bg-zinc-100 border border-zinc-500 rounded-2xl overflow-hidden transition-all hover:border-[#a600ff]">
            <span className="relative z-10 font-quantico text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-900 group-hover:text-[#a600ff]">
              Initialize More Data
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}