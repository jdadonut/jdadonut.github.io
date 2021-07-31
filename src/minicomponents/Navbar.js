import NavbarItem from './NavbarItem';
import NavbarLogo from './NavbarLogo';
import NavbarImage from '../pfp.png';
import './Navbar.css';
function Navbar() {
  return (
    <div className={'Navbar'}>
      <NavbarLogo src={NavbarImage} />
      <div className={"NavbarLinks"}>
      <NavbarItem to="/" text="Home" />
      <NavbarItem to="/about" text="About" />
      <NavbarItem to="/policies" text="Policies" />
      <NavbarItem to="/projects" text="Projects" />
      <NavbarItem to="/blog" text="Blog" />
      </div>
    </div>
  );
}
export default Navbar;
