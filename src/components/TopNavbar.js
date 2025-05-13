import { FaPlaystation } from "react-icons/fa";


function TopNavbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container" style={{ width: '10%' }}>
                <a className="navbar-brand" href="#">
                    <img src="https://www.pngall.com/wp-content/uploads/13/PlayStation-Logo-1.png" alt="PlayStation" width="50" height="40"/>
                </a>
            </div>
            <div className="container-fluid">

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            style={{ transition: 'font-size 0.1s ease' }}
                            onMouseEnter={(e) => e.target.style.fontSize = '1.20rem'} // tamaño más grande
                            onMouseLeave={(e) => e.target.style.fontSize = '1rem'} // tamaño normal
                        >
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            style={{ transition: 'font-size 0.1s ease' }}
                            onMouseEnter={(e) => e.target.style.fontSize = '1.15rem'}
                            onMouseLeave={(e) => e.target.style.fontSize = '1rem'}
                        >
                            Acerca de
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            style={{ transition: 'font-size 0.1s ease' }}
                            onMouseEnter={(e) => e.target.style.fontSize = '1.15rem'}
                            onMouseLeave={(e) => e.target.style.fontSize = '1rem'}
                        >
                            Juegos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#"
                            style={{ transition: 'font-size 0.1s ease' }}
                            onMouseEnter={(e) => e.target.style.fontSize = '1.15rem'}
                            onMouseLeave={(e) => e.target.style.fontSize = '1rem'}
                        >
                            Contactos
                        </a>
                    </li>
                </ul>



                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        <FaPlaystation className="me-2" /> PlayStations
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                            <button className="dropdown-item" onClick={()=>{}}>PlayStation 1</button>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">PlayStation 2</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">PlayStation 3</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">PlayStation 4</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">PlayStation 5</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default TopNavbar;