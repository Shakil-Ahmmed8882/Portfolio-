import { Helmet } from 'react-helmet-async'
import Container from '../../components/Shared/Container'
import { About } from './About/About'
import { Services } from './Services/Services'
import { Skills } from './Skills/Skills'
import Projects from './Projects/Projects'
import { Timeline } from './Timeline/Timeline'

const Home = () => {


  return (
    <div>
      <Helmet>
        <title>Portfolio || Home</title>
      </Helmet>
      {/* Categories section  */}
      <>
        <About />
        <Services />
        <Skills/>
        <Projects/>

        <Timeline/>

      </>
    </div>
  )
}

export default Home
