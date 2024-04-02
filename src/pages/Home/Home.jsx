import { Helmet } from 'react-helmet-async'
import Container from '../../components/Shared/Container'
import { About } from './About'
import { Services } from './Services/Services'
import { Skills } from './Skills/Skills'

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

      </>
    </div>
  )
}

export default Home
