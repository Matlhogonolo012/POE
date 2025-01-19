
import { useState, useEffect } from "react";
import ProjectCarousel from "../../src/components/projectCarousel"

const FeaturedProjects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      const token = import.meta.env.VITE_GITHUB_TOKEN; 
      try {
        const response = await fetch(`https://api.github.com/user/repos`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data = await response.json();
        console.log("Fetched Data:", data); // Debugging

        // Format the repositories into the projectsData structure
        const formattedProjects = data.map((repo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description || "No description available",
          url: repo.html_url,
          privacy: repo.private ? "Private" : "Public",
          visibility: repo.visibility,
          collaborators_url: repo.collaborators_url,
          languages_url: repo.languages_url,
          created_at: repo.created_at,
          updated_at: repo.updated_at,
          watchers_count: repo.watchers_count,
          imageUrl: "https://via.placeholder.com/300", // Placeholder image (replace with actual image URL if available)
          githubLink: repo.html_url,
          liveLink: repo.homepage || "#", // Use homepage if available, otherwise fallback to "#"
          techStack: [
            { icon: "FaReact", name: "React" }, // Default tech stack (customize as needed)
            { icon: "FaNodeJs", name: "Node.js" },
          ],
          keyFeatures: [
            "Feature 1", // Default key features (customize as needed)
            "Feature 2",
          ],
          challenges: "Challenges faced and solutions...", // Default challenges (customize as needed)
        }));

        setProjectsData(formattedProjects);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error); // Debugging
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="featured-projects">
      <ProjectCarousel projects={projectsData} />
    </div>
  );
};

export default FeaturedProjects;