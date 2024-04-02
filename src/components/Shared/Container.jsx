/* eslint-disable react/prop-types */
const Container = ({ children,style }) => {
  return (
    <div className={`${style? style:''} relative max-w-[1400px] lg:mx-auto px-0 md:px-5 lg:px-20`}>
      {children}
    </div>
  )
}

export default Container
