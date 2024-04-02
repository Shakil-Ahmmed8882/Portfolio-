import Container from '../Container'
import Logo from '../Logo'
import { SidebarMenu } from './SidebarMenu/SidebarMenu'


const Navbar = () => {
  return (
    
      <div className='py-4 '>
        <Container>
          <div className='flex z-50 flex-row  items-center justify-between gap-3 md:gap-0'>
            <Logo />
            <div className='flex gap-6'>
            <SidebarMenu/>
            </div>
          </div>
        </Container>
      </div>
    
  )
}

export default Navbar
