import './NavbarLogo.css';

function NavbarLogo(props) {
  return (
    <div className="NavbarLogo">
      <img src={props.src} className="NavbarLogo--image" />
    </div>
  );
}
export default NavbarLogo;
