/* eslint-disable react/prop-types */
const Container = ({ children }) => {
  return (
    <div className='relative max-w-[1400px] lg:mx-auto px-3 lg:px-20'>
      {children}
    </div>
  )
}

export default Container
