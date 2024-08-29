import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const image = 'images/me.jpg';
const Banner = () => {

    return (
        <section className="mt-10 lg:flex lg:justify-center lg:items-end">
            <div className="flex justify-center">
                {/* A continuación agregamos la variable al SRC que es la que contiene la imagen*/}
                <img src={image} className="h-52 w-52 rounded-full" alt="" />
            </div>
            <div>
                <div className="flex flex-col items-center p-5 text-zinc-900 dark:text-white text-base">
                    <h1 className="mb-2 text-2xl font-bold">Hi There!</h1>
                    <p className="text-center text-lg">I am <b className="text-amber-600">Jonhatan Villalobos, PASSIONATE</b> about web development.</p>
                </div>
                <div className="flex justify-center">
                    <a href="/cv/CV.pdf" className="bg-zinc-900 dark:bg-white dark:text-orange-600 text-zinc-50 cursor-pointer px-4 py-2 rounded-lg tracking-wide transition-all duration-500 hover:bg-amber-600 hover:text-zinc-50 dark:hover:bg-amber-600 dark:hover:text-white">Download CV</a>
                    <span className="flex justify-center items-center text-zinc-900 dark:text-white text-2xl mx-3"><a href="https://www.linkedin.com/in/jonhatan-villalobos-64a00b221/" className="transition-all duration-200 hover:text-amber-600 hover:scale-125"><FontAwesomeIcon icon={faLinkedin}/></a></span>
                    <span className="flex justify-center items-center text-zinc-900 dark:text-white text-2xl"><a href="https://github.com/ProgramadorXP" className="transition-all duration-200 hover:text-amber-600 hover:scale-125"><FontAwesomeIcon icon={faGithub}/></a></span>
                </div>
            </div>
        </section>
     );
}
 
export default Banner;