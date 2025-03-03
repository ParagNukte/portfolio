function Hero() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 l:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br /> I'm Parag{" "}
              <span className="text-red-500">Nukte</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">Web Developer</p>
            <p className="mb-4">
              I’m a passionate web developer with expertise in React, Next.js,
              and modern web technologies. I love creating beautiful and
              functional websites that solve real-world problems.
            </p>
            <a href="/resume.pdf" download="Parag_Nukte_Resume.pdf">
              <button className="bg-black text-white px-3 py-2 w-max rounded-md">
                Download Resume
              </button>
            </a>
            {/* <div className="mt-4">
              <Link to="/about" className="text-red-500 hover:underline">
                Learn More About Me
              </Link>
            </div> */}
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src="Parag.png" alt="hero" className="lg:h-[90vh] h-96" />
            <img
              src="react.svg"
              alt="reactlogo"
              className="absolute bg-black w-10 top-36 left-20 rounded-full md:hidden"
            />
            <img
              src="Redux.png"
              alt="reduxlogo"
              className="absolute w-10 top-0 right-20 rounded-full md:hidden"
            />
            <img
              src="Tailwind Css.png"
              alt="tailwindlogo"
              className="absolute w-10 bottom-36 right-10 rounded-full md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-10 right-7 hidden bg-gray-200 p-2 md:flex flex-col gap-6 rounded-full">
        <img src="facebook.png" alt="" className="w-20" />
        <img src="instagram.png" alt="" className="w-20" />
        <img src="twitter.png" alt="" className="w-20" />
        <img src="linkedin.png" alt="" className="w-20" />
      </div>
    </section>
  );
}

export default Hero;
