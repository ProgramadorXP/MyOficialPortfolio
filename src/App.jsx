import AboutMe from './AboutMe'
import Banner from './Banner'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Projects from './Projects'
import Skills from './Skills'

function App() {

  return (
    <div className='min-h-screen mx-auto max-w-[1024px]'>
      <Header />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
