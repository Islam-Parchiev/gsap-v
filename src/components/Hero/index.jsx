const Hero = () => {
  return (
    <section className="panel h-screen snap-start relative">
    <div className="shape absolute w-[40rem] h-[25rem] -rotate-45 top-40 right-40"></div>
        <div className="px-40 h-full backdrop-blur-3xl">
            <div className="px-20 h-full flex flex-col justify-center gap-1">
                <span className="opacity-50 text-xl">Design & dev</span>
                <h1 className="text-7xl">
                    If code is a poetry - then <br/> we are Dante
                </h1>
            </div>
        </div>
    </section>
  )
}

export default Hero