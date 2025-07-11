import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="navbar">
      <div className="logo">@MARÍAJOSÉ</div>
      <nav>
        <Link to="/" className={pathname === '/' ? 'active' : ''}>Inicio</Link>
        <Link to="/trabajo-especial" className={pathname === '/trabajo-especial' ? 'active' : ''}>Trabajo especial</Link>
        <Link to="/trabajos-del-curso" className={pathname === '/trabajos-del-curso' ? 'active' : ''}>Trabajos del curso</Link>
      </nav>
    </header>
  );
}
