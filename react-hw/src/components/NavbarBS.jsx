import { faBars } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavbarBS() {
  const navbarStyle = {
    backgroundColor: "#4e3797",
    overflow: 'x-clip',
    width: '100vw',
    marginBottom: '80px',
  };

  const textColor = {
    color: "white",
    fontSize: "0.9rem", 
  };

  return (
    <nav className="navbar navbar-expand-md fixed-top" style={navbarStyle}>
      <div className="container">
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="/signin?returnUrl=%2Fbootcamps" style={textColor}>
            English          
          </a>
          <a className="navbar-brand ms-2" href="/en" style={textColor}>
            تسجيل الدخول      
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} size="2x" className="text-primary" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/" style={textColor}>
                الرئيسية
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bootcamps" style={textColor}>
                المعسكرات والبرامج
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about" style={textColor}>
                حول الأكاديمية
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/TestCenter" style={textColor}>
                مركز الاختبارات
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="/">
                <img
                  className="h-14"
                  src="https://tuwaiq.edu.sa/img/logos/Logos_White-04.png"
                  alt="Tuwaiq Academy"
                  style={{ width: '10rem' }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarBS;


