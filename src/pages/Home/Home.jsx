import { Helmet } from 'react-helmet-async'
import { TitleAndDescription } from '../../components/Shared/Title&Description/TitleAndDescription'
import Container from '../../components/Shared/Container'
import { TextBackdrop } from '../../components/ui/TextBackdrop/TextBackdrop'

const Home = () => {


  return (
    <div>
      <Helmet>
        <title>Portfolio || Home</title>
      </Helmet>
      {/* Categories section  */}
      <Container>
      <TitleAndDescription title={"Web Developer"} description={""}/>
      <TextBackdrop text={'Text'}/>
      </Container>
    </div>
  )
}

export default Home
