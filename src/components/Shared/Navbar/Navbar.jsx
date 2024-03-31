import Container from '../Container'
import Logo from '../Logo'
import { Menu } from './SidebarMenu/Menu'
import { LightMood } from './LightMood'
import { SidebarMenu } from './SidebarMenu/SidebarMenu'


const Navbar = () => {
  return (
    <div className='fixed w-full z-50 shadow-sm '>
      <div className='py-4 '>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            <Logo />
            <div className='flex gap-6'>
            <LightMood/>
            <SidebarMenu/>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
