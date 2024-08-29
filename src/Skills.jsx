import TitleSection from "./components/TitleSection";

const html = '/icons/html.png';
const css = '/icons/css.png';
const js = '/icons/js.png';
const sass = '/icons/sass.png';
const bootstrap = '/icons/bootstrap.png';
const tailwind = '/icons/tailwind.png';
const react = '/icons/react.png';

const Skills = () => {
    return ( 
        <section className="mt-20 p-5" id="skills">
            <TitleSection name="Skills"/>
            <div className="mt-10 grid grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-6">
                <div className="flex justify-center"><img className="h-16 w-16 cursor-pointer transition-all duration-200 hover:scale-105" src={html} alt="" /></div>
                <div className="flex justify-center"><img className="h-16 w-16 cursor-pointer transition-all duration-200 hover:scale-105" src={css} alt="" /></div>
                <div className="flex justify-center"><img className="h-16 w-16 cursor-pointer transition-all duration-200 hover:scale-105" src={js} alt="" /></div>
                <div className="flex justify-center"><img className="h-16 w-16 cursor-pointer transition-all duration-200 hover:scale-105" src={sass} alt="" /></div>
                <div className="flex justify-center"><img className="h-16 w-16 cursor-pointer transition-all duration-200 hover:scale-105" src={bootstrap} alt="" /></div>
                <div className="flex justify-center"><img className="h-16 w-16 cursor-pointer transition-all duration-200 hover:scale-105" src={tailwind} alt="" /></div>
                <div className="flex justify-center"><img className="h-16 w-16 cursor-pointer transition-all duration-200 hover:scale-105" src={react} alt="" /></div>
            </div>
        </section>
     );
}
 
export default Skills;