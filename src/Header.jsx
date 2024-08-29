import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faBars, faXmark, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState('hidden');
    const [theme, setTheme] = useState(() => {
        if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            return "dark";
        }else{
            return "light";
        }
    });

    useEffect(() => {
        if(theme == "dark"){
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }
    }, [theme])

    const handleChangeTheme = ()=> {
        setTheme(prevThem => prevThem == "light" ? "dark" : "light")
    }

    const showMenu = () => {
        open == 'hidden' ? setOpen('') : setOpen('hidden'); 
    }

    return(
        <header className='contenedorHeader flex justify-between font-bold items-center p-5 sticky top-0 bg-zinc-50 dark:bg-zinc-900'>
            <div>
                <a href="/index" className='text-4xl'>
                    <FontAwesomeIcon icon={faCode} className='text-amber-600'/>
                </a>
            </div>
            <div className='md:flex flex-row-reverse'>
                <span className='cursor-pointer mr-5 md:flex md:items-center'>
                    <FontAwesomeIcon icon={faMoon} className='text-black dark:text-white text-2xl'onClick={handleChangeTheme}/>
                </span>
                <span className='cursor-pointer'>
                    <FontAwesomeIcon icon={faBars} onClick={showMenu} className='text-black dark:text-white text-2xl transition-all duration-200 hover:text-amber-600 hover:scale-110 md:hidden'/>
                </span>   
                <nav className={`${open ? 'top-[-490px]' : 'top-0' } bg-zinc-50 dark:bg-zinc-900 absolute w-full top-0 left-0 p-2 transition-all duration-500 md:static`}>
                    <ul className='text-black dark:text-white md:flex'>
                        <li className='p-2 rounded-lg hover:bg-amber-600  transition cursor-pointer md:p-0 md:px-4'><a href="#home">Home</a></li>
                        <li className='p-2 rounded-lg hover:bg-amber-600  transition cursor-pointer md:p-0 md:px-4'><a href="#about_me">About me</a></li>
                        <li className='p-2 rounded-lg hover:bg-amber-600  transition cursor-pointer md:p-0 md:px-4'><a href="#skills">Skills</a></li>
                        <li className='p-2 rounded-lg hover:bg-amber-600  transition cursor-pointer md:p-0 md:px-4'><a href="#projects">Projects</a></li>
                        <li className='p-2 rounded-lg hover:bg-amber-600  transition cursor-pointer md:p-0 md:px-4'><a href="#contact_me">Contact me</a></li>
                        <li className='p-2 rounded-lg text-center'><a href="#" onClick={showMenu} className='text-amber-600 text-3xl hover:text-4xl transition-all duration-200 ease-in md:hidden'><FontAwesomeIcon icon={faXmark} /></a></li>
                    </ul>
                </nav>
            </div>
        </header>
)}

export default Header;