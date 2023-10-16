import "./navbar.css"
import HamburgerDrawer from "./HamburgerDrawer"

const Navbar = ({ setCategory }) => {
  return (
    <div className="navbar">
      <div className="icon">
        <HamburgerDrawer setCategory={setCategory} />
      </div>

      <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" />
    </div>
  );
};

export default Navbar;
