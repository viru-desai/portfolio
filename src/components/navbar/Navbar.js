import Sidebar from "../sidebar/Sidebar";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <span className="username">Virupakshi Desai</span>
        <div className="social">
          <a href="#" aria-label="Facebook">
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a href="#" aria-label="YouTube">
            <img src="/youtube.png" alt="YouTube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
