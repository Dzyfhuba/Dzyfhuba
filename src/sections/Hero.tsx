const Hero = () => {
  return (
    <section className="relative min-h-screen">
      <article className="">
        <span>hello, i&apos;m a </span>
        <h1 className="text-2xl capitalize font-black"><span className="text-primary-layer">back end</span> developer.</h1>
        <h2>I&apos;m Hafidz Ubaidillah, a Back End Developer for Befwork and Bangbeli.</h2>
      </article>
      <img
        src="https://raw.githubusercontent.com/Dzyfhuba/personal-web-mini/main/my-photo.png" 
        alt="Hafidz Ubaidillah"
        className="absolute bottom-0 right-0 w-3/4"
      />
    </section>
  )
}

export default Hero