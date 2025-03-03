import { Link } from "react-router-dom";
import { ProjectData } from "../assistcomponents/ProjectData";
import Card from "./Card";
function Projects() {
  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4 ">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:rid-cols-3 place-items-center gap-10">
          {ProjectData.map((project, index) => {
            return (
              <Card
                key={index}
                projectTitle={project.title}
                projectImage={project.image}
                githubLink={project.github}
                live={project.live}
                desc={project.desc}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-center text-red-500 underline text-lg">
        More projects are yet to deploy. Please have a look at my{" "}
        <Link
          to="https://github.com/ParagNukte"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-yellow-300"
        >
          GitHub Repo
        </Link>
      </div>
    </section>
  );
}

export default Projects;
