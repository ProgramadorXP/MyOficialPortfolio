import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";


const Article = ({ project }) => {
  return (
    <article className="border-2 border-amber-600 max-w-xs min-h-full m-auto rounded-xl p-2 flex flex-col justify-between gap-3">
      <div className="flex justify-center">
        <img
          className="h-40 w-full rounded-xl"
          src={project.image}
          alt="Projecto Spotify"
        />
      </div>
      <div>
        <h3 className="text-center text-amber-600 text-lg">{project.name}</h3>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {project.techs &&
          Object.entries(project.techs).map(([key, value]) => (
            <span key={key}>
              {key === "materialUI" ? (
                <div dangerouslySetInnerHTML={{ __html: value }} />
              ) : (
                <img
                  className="h-10 w-10 cursor-pointer transition-all duration-200 hover:scale-110"
                  src={value}
                  alt={key}
                  onError={(e) => (e.target.style.display = "none")}
                />
              )}
            </span>
          ))}
      </div>
      <div className=" line-clamp-4 max-h-[100px] max-w-full">
        <p className="text-zinc-900 dark:text-white h-1/2">
          {project.description}
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-amber-600 text-md">{project.date}</p>
        </div>
        <div>
          <a href={project.link} target="_blank">
            <FontAwesomeIcon
              className="text-zinc-900 dark:text-white text-lg cursor-pointer transition-all duration-200 hover:text-amber-600 hover:scale-125 dark:hover:text-amber-600 mr-2"
              icon={faPaperclip}
            />
          </a>
          <a href={project.linkGit} target="_blank">
            <FontAwesomeIcon
              className="text-zinc-900 dark:text-white text-lg cursor-pointer transition-all duration-200 hover:text-amber-600 hover:scale-125 dark:hover:text-amber-600 mr-2"
              icon={faGithub}
            />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Article;
