import { skills } from "../assets/skills";

const About = () => {
  return (
    <main className="px-4 py-28 md:py-36 md:px-12">
      <section className="">
        <div className="text-xl md:text-3xl lg:text-4xl">
          <span className="text-[#6D73E9]">/</span>
          about-me
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
        </article>
      </section>

      <section className="mt-24">
        <div className="text-xl md:text-2xl lg:text-3xl flex flex-row items-center gap-4">
          <p>
            <span className="text-[#6D73E9]">#</span>
            skills
          </p>
          <div className="border-2 border-[#6D73E9] rounded w-1/2 h-0"></div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          {
            skills.map((skill) => {
              const { title, desc } = skill
              return (
                <div className="w-min h-min border-2 rounded-sm border-[#6D73E9]">
                  <p className="p-2 border-b-2 border-[#6D73E9] text-lg md:text-xl">
                    { title }
                  </p>
                  <div className="p-2 text-[#ABB2BF]">
                    { desc }
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </main>
  );
};

export default About;
