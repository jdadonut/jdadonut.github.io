import { Link } from 'react-router-dom';
import './NavbarItem.css';

function NavbarItem(props) {
  return (
    <>
      <Link to={props.to} className="NavbarLink">
        {props.text}
      </Link>
    </>
  );
}

export default NavbarItem;
