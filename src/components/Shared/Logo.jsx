import { Link } from 'react-router-dom'
// import logoImg from '../../assets/images/logo.png'
const Logo = () => {
  return (
    <Link className='w-9 h-9 rounded-full bg-primary-color' to='/'>
      {/* <img
        className='hidden md:block'
        src={logoImg}
        src=''
        alt='logo'
        width='100'
        height='100'
      /> */}
    </Link>
  )
}

export default Logo
