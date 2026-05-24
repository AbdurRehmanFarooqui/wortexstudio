// app/portfolio/[id]/page.tsx

import { fetchPortfolioProject } from "./actions"; // adjust path
import ProjectDetailsClient from "./clientPage"; // adjust path

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;   // 👈 Promise!
}) {
  const { id } = await params;         // 👈 destructure after awaiting
  const project = await fetchPortfolioProject({ id });   // pass { id } directly

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Project not found</p>
      </div>
    );
  }

  return <ProjectDetailsClient project={project} />;
}