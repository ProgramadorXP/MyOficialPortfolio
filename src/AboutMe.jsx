import TitleSection from "./components/TitleSection";

const AboutMe = () => {
  return (
    <section className="mt-20 p-5" id="about_me">
      <TitleSection name="About Me"/>
      <p className="text-zinc-900 dark:text-white flex flex-col mt-10">
        I began my career in programming at the age of 20, concluding my degree
        in Computer Systems Engineering at the age of 24. I found the love of
        web development at the age of 22 when I was taught some subjects related
        to it, since then I have been developing some projects and learning
        different technologies. 
        <b className="text-amber-600 mt-1">
            My goal is to create products that offer
            exceptional experiences with an attractive, intuitive and quality
            design. I am willing to continue learning new technologies in a
            self-taught way as I have been doing for the last 3 years.
        </b>
      </p>
    </section>
  );
};

export default AboutMe;
