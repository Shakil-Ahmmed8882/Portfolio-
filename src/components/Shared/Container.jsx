/* eslint-disable react/prop-types */
const Container = ({ children }) => {
  return (
    <div className='relative z-10 max-w-[1400px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
      {children}
    </div>
  )
}

export default Container
