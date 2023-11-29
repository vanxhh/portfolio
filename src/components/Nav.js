import ListMobile from "./ListMobile";
import { routes } from "../assets/routes";

const Nav = () => {
  return (
    <nav className="absolute top-0 left-0 w-full p-4 md:py-8 md:px-12 flex items-center justify-between">
      <div className="lg:text-xl">
        <a href='/'>Vansh</a>
      </div>
      <ListMobile />
      <ul className="hidden lg:flex lg:items-center gap-8 text-[#ABB2BF]">
        {
          routes.map((route) => {
            const { href, title } = route;
            return (
              <li>
                <a
                  href={href}
                  className="h-full flex items-center justify-center hover:text-white transition-all duration-300 lg:text-lg"
                >
                  <span className="h-full text-[#6D73E9]">#</span>
                  <div className="h-full">{title}</div>
                </a>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
}

export default Nav;
