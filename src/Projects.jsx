import Article from "./components/Article";
import TitleSection from "./components/TitleSection";
import { projects } from "./utils/projects";

const Projects = () => {

    return ( 
        <section className="mt-20 p-5" id="projects">
            <TitleSection name="Projects"/>
            <div className="mt-10 grid grid-cols-3 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                {/*AQUI CARGO EL COMPONENTE DE ARICULOS DANDOLE UNA LISTA DE PROPS*/}
                {projects.map(project => (
                    <Article 
                        key={project.id}
                        project={project}
                    />   
                ))}
            </div>
        </section>
     );
}
 
export default Projects;