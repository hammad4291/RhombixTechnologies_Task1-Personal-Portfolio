import { useState } from "react";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import "./App.css";
import ProjectsSection from "./components/ProjectsSection";
import BlogsSection from "./components/BlogsSection";
import IntroductionSection from "./components/IntroductionSection";
import BackgroundSection from "./components/BackgroundSection";
import SkillsSection from "./components/SkillsSection";
import ExperianceSection from "./components/ExperianceSection";
import AchievementSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";

// const API_URL = process.env.REACT_APP_API_URL;
function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]); // ✅ NEW
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Projects
        const projectRes = await fetch(`${API_URL}/projects`);
        const projectData = await projectRes.json();
        setProjects(projectData);

        // Fetch Blogs
        const blogRes = await fetch(`${API_URL}/blogs`);
        const blogData = await blogRes.json();
        setBlogs(blogData); // ✅ Store blogs
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mainDiv">
      <NavBar />
      <div className="container1">
        {/* Introduction Start */}
        <IntroductionSection/>
        {/* Introduction End */}
        {/* Background Start */}
        <BackgroundSection/>
        {/* Background End */}
        {/* Projects Start */}
        <ProjectsSection projects={projects} loading={loading}/>
        {/* Projects End */}
        {/* Skills Start */}
        <SkillsSection/>
        {/* Skills End */}
        {/* Experiance Start */}
        <ExperianceSection/>
        {/* Experiance End */}
        {/* Blogs Start */}
        <BlogsSection blogs={blogs} loading={loading}/>
        {/* Blogs End */}
        {/* Achievements Start */}
        <AchievementSection/>
        {/* Achievements End */}
        {/* Contact Start */}
        <ContactSection/>
        {/* Contact End */}
      </div>
    </div>
  );
}

export default App;
