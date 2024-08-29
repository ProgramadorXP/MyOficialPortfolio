import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return ( 
        <footer className="mt-10 p-5 flex flex-col">
            <div className="text-center">
                <a href="https://www.facebook.com/jonhatan.villalobos.5/"><FontAwesomeIcon className="text-zinc-900 dark:text-white text-2xl transition-all duration-200 hover:text-amber-600 hover:scale-150 dark:hover:text-amber-600" icon={faFacebook}/></a>
                <a href="https://www.instagram.com/jonyvilla/"><FontAwesomeIcon className="text-zinc-900 dark:text-white text-2xl mx-4 transition-all duration-200 hover:text-amber-600 hover:scale-150 dark:hover:text-amber-600" icon={faInstagram}/></a>
                <a href=""><FontAwesomeIcon className="text-zinc-900 dark:text-white text-2xl transition-all duration-200 hover:text-amber-600 hover:scale-150 dark:hover:text-amber-600" icon={faTwitter}/></a>
            </div>
            <div className="mt-2">
                <p className="text-zinc-900 dark:text-white text-center">
                    &copy; 2023 Jonhatan Villalobos.
                </p>
            </div>
        </footer>
     );
}
 
export default Footer;