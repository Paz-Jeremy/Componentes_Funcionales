import { FaPlaystation, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-dark text-light pt-5 pb-3">
            <div className="container">
                <div className="row mb-4 align-items-center">
                    <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
                        <a href="#" className="d-inline-flex align-items-center text-decoration-none text-light">
                        <FaPlaystation size={32} className="me-2" />
                        <span className="h5 mb-0">PlayStation</span>
                        </a>
                    </div>
                    <div className="col-md-8 text-center text-md-end">
                        <a href="#" className="text-light me-3 fs-5">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-light me-3 fs-5">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-light me-3 fs-5">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-light fs-5">
                            <FaYoutube />
                        </a>
                    </div>
                    </div>

                    <div className="row">
                        <div className="col-6 col-md-3 mb-3">
                            <h6 className="text-uppercase">Productos</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">PS5</a></li>
                                <li><a href="#" className="text-light text-decoration-none">PS4</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Juegos</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Accesorios</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3 mb-3">
                            <h6 className="text-uppercase">Comunidad</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">Foros</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Noticias</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Eventos</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3 mb-3">
                            <h6 className="text-uppercase">Soporte</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">Ayuda</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Garantía</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Descargas</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Contacto</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3 mb-3">
                            <h6 className="text-uppercase">Legal</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-light text-decoration-none">Términos</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Privacidad</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Cookies</a></li>
                                <li><a href="#" className="text-light text-decoration-none">Mapa</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                    <small>© {new Date().getFullYear()} PlayStation. Todos los derechos reservados.</small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;