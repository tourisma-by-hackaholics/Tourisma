import Wrapper from "../components/Wrapper";

const Header = () => {
  return (
    <header className="navbar bg-base-100 h-24">
      <Wrapper>
        <div className="flex-1">
          <a className="cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all">
            <img className="h-10 translate-y-[-0.5rem]" src="/images/Logo.svg" alt="Tourisma" />
          </a>
        </div>
        <div className="flex-none font-display">
          <ul className="menu menu-horizontal px-1 hidden lg:flex gap-2">
            <li>
              <a className="text-lg">About Us</a>
            </li>
            <li>
              <a className="text-lg">Find Tour Guides</a>
            </li>
            <li>
              <button className="btn btn-outline btn-info">Sign Up</button>
            </li>
            <li>
              <button className="btn btn-outline btn-info">Register</button>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
