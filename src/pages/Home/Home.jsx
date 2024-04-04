import { Helmet } from 'react-helmet-async'
import Container from '../../components/Shared/Container'
import { About } from './About/About'
import { Services } from './Services/Services'
import { Skills } from './Skills/Skills'
import Projects from './Projects/Projects'

const Home = () => {


  return (
    <div>
      <Helmet>
        <title>Portfolio || Home</title>
      </Helmet>
      {/* Categories section  */}
      <>
        {/* About section */}
        <About />
        <Services />
        <Skills/>
        <Projects/>

      </>
    </div>
  )
}

export default Home
