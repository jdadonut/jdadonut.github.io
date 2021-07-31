import './Home.css';
import { Link } from 'react-router-dom';
import pfp from './pfp.png'
function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img className={"home-header-img"} src={pfp} alt={""} />
        <h2>hi, im jai.</h2>
        <p>
          <img
            src={
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.bigcartel.com%2Fproduct_images%2F236085887%2Fthree%2Barrows%2Binverted%2Bcolour.png%3Fauto%3Dformat%26fit%3Dmax%26h%3D1200%26w%3D1200&f=1&nofb=1'
            }
            className={'arrows'}
            alt={'three arrows sign'}
          />
          <i>esse melior. in aternum.</i>
        </p>
        <div className={'navigation-menu'}>
          <Link className="link" to="/about">
            About
          </Link>
          <br />
          <Link className="link" to="/about">
            Policies
          </Link>
          <br />
          <Link className="link" to="/about">
            Projects
          </Link>
          <br />
          <Link className="link" to="/about">
            Blog
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Home;
