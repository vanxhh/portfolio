import Mail from "../assets/Mail";
import Github from "../assets/Github";
import Linkedin from "../assets/Linkedin";
import Instagram from "../assets/Instagram";
import Figma from "../assets/Figma";
import Discord from "../assets/Discord";

const Connect = () => {
  return (
    <main className="px-4 py-28 md:py-36 md:px-12">
      <section className="">
        <div className="text-xl md:text-3xl lg:text-4xl">
          <span className="text-[#6D73E9]">/</span>
          connect
        </div>
        <div className="pt-8 flex flex-col gap-8 md:flex-row justify-between">
          <article className="gap-4 md:tracking-wide text-[#ABB2BF]">
            <p>
              I am interested in jobs and freelance opportunities. Feel free to
              contact me.
            </p>
          </article>
          <div className="w-min h-min border-2 rounded-sm border-[#6D73E9]">
            <p className="p-2 border-b-2 border-[#6D73E9] md:text-lg">
              Mail me Here
            </p>
            <div className="p-2 text-[#ABB2BF] flex gap-2 items-center">
              <Mail />
              <a
                href="mailto:bhardwajvansh26@gmail.com"
                target="_blank"
                className="hover:text-white transition-all duration-300"
              >
                bhardwajvansh26@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <div className="text-xl md:text-2xl lg:text-3xl flex flex-row items-center gap-4">
          <p>
            <span className="text-[#6D73E9]">#</span>
            media
          </p>
          <div className="border-2 border-[#6D73E9] rounded w-1/2 h-0"></div>
        </div>

        <ul className="mt-12 flex flex-col gap-4 text-[#ABB2BF]">
          <li className="flex gap-2 items-center">
            <Github />
            <a
              href="https://github.com/vanxhh"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              Github
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <Figma />
            <a
              href="https://www.figma.com/files/team/1303467187338172500"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              Figma
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <Discord />
            <a
              href="https://discordapp.com"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              vans#7706
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <Instagram />
            <a
              href="https://instagram.com/vanxh___"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              vanxh___
            </a>
          </li>
          <li className="flex gap-2 items-center">
            <Linkedin />
            <a
              href="https://linkedin.com/in/vansh-bhardwaj-76a722194"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              Vansh
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Connect;
