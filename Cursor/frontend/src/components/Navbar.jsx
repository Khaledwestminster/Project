import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          Polyglot Practice
        </Link>
        
        <ul className="navbar-nav">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/courses" className="nav-link">Courses</Link>
          </li>
          {!user ? (
            <li>
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          ) : (
            <li className="profile-dropdown">
              <button 
                className="nav-link"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {user.name}
              </button>
              {isMenuOpen && (
                <div className="profile-menu">
                  <Link to="/profile" className="profile-menu-item">Profile</Link>
                  <Link to="/settings" className="profile-menu-item">Settings</Link>
                  <button 
                    onClick={handleLogout}
                    className="profile-menu-item"
                  >
                    Logout
                  </button>
                </div>
              )}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 