const Home = () => {
  return (
    <div className="p-4 md:py-8 md:px-12">
      <section className="h-screen flex flex-col justify-center">
        <p className="text-2xl md:text-3xl lg:text-4xl">
          Hi, I am{" "}
          <div className="pt-2 text-[#6D73E9] font-bold">Vansh Bhardwaj</div>
        </p>
        <p className="pt-4 md:pt-6 text-base md:text-xl text-[#ABB2BF]">
          I specialize in Full-Stack application development and UI designing.
        </p>
        <div className="mt-8 w-36 h-12 md:text-lg md:w-40 flex items-center justify-center border-2 rounded-md border-[#6D73E9] hover:bg-[#6D73E9] cursor-pointer transition-all duration-300">
          <a href="/">Contact Me!</a>
        </div>
      </section>

      <section>
        <div className="text-xl md:text-2xl lg:text-3xl flex flex-row items-center gap-4">
          <p>
            <span className="text-[#6D73E9]">#</span>
            about
          </p>
          <div className="border-2 border-[#6D73E9] rounded w-1/2 h-0"></div>
        </div>
        <article className="pt-8 flex flex-col gap-4 md:w-3/4 lg:w-1/2 md:tracking-wide text-[#ABB2BF]">
          <div>
            Hello, I am Vansh!
          </div>
          <div>
            I am a Full-Stack developer based in New Delhi, India. I can develop responsive websites from scratch into modern user-friendly web experiences. Using my creativity and knowledge to create web applications has been my passion for over 3 years now.
          </div>
          <div>
            I always strive to learn about the latest technologies and frameworks to keep me up-to-date with the current technological world.
          </div>
          <div className="text-white mt-8 w-32 h-12 flex items-center justify-center border-2 rounded-md border-[#6D73E9] hover:bg-[#6D73E9] cursor-pointer transition-all duration-300">
            <a href="/">Read More</a>
          </div>
        </article>
      </section>

      <section className="mt-24">
        <div className="text-xl md:text-2xl lg:text-3xl flex flex-row items-center gap-4">
          <p>
            <span className="text-[#6D73E9]">#</span>
            projects
          </p>
          <div className="border-2 border-[#6D73E9] rounded w-1/2 h-0"></div>
        </div>
        <div className="mt-8 border-2 rounded-sm border-[#6D73E9] h-96">
        </div>
      </section>

      <section className="mt-24">
        <div className="text-xl md:text-2xl lg:text-3xl flex flex-row items-center gap-4">
          <p>
            <span className="text-[#6D73E9]">#</span>
            connect
          </p>
          <div className="border-2 border-[#6D73E9] rounded w-1/2 h-0"></div>
        </div>
        <article className="pt-8 flex flex-col gap-4 md:w-3/4 lg:w-1/2 md:tracking-wide text-[#ABB2BF]">
          <p>
            I am interested in jobs and freelance opportunities. Feel free to contact me.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Home;
