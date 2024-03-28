import { Helmet } from 'react-helmet-async'
import { TitleAndDescription } from '../../components/Shared/Title&Description/TitleAndDescription'
import Container from '../../components/Shared/Container'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Portfolio || Home</title>
      </Helmet>
      {/* Categories section  */}
      <Container>
      <TitleAndDescription title={"Web Developer"} description={"As a React developer with 5 years of experience, I have honed my skills in JavaScript and am currently learning TypeScript to expand my expertise. I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with clients to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems."} position={""}/>
      </Container>
    </div>
  )
}

export default Home
