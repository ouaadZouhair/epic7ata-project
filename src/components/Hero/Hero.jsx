

const Hero = (props) => {
  return (
    <div className='relative w-[75%] h-[620px] mx-auto border border-slate-50 rounded-2xl overflow-hidden flex flex-col justify-center items-center shadow-sm'>
        {props.children}
    </div>
  )
}

export default Hero