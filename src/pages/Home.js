import React from "react";
import { FaPlaystation } from "react-icons/fa";

const featuredTitles = [
            "The Last of Us Part II",
            "Spider-Man: Miles Morales",
            "God of War Ragnarök",
            "Horizon"
            ];

            const featuredImages = [
                "https://m.media-amazon.com/images/M/MV5BODIwYWZmYWMtYTliNC00YWQ5LTg5ZmEtNTZhNmUxNjdiMzNiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", 
                "https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/PRfYtTZQsuj3ALrBXGL8MjAH.jpg",
                "https://m.media-amazon.com/images/M/MV5BMTQ5YTA1ZmUtYzVlNC00YjI2LWJhYjgtNWE4MjY2OWEzMGQwXkEyXkFqcGc@._V1_.jpg",
                "https://image.api.playstation.com/vulcan/ap/rnd/202409/2716/2cdf80a4335a032aac4302fd1a941cac3a0e237d6a1d1fe0.jpg"
            ];

function Home() {
    return (
        <div>
            {/* Hero */}
            <section
                className="jumbotron jumbotron-fluid text-white d-flex align-items-center"
                style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://www.egames.news/__export/1675442087652/sites/debate/img/2023/02/03/playstation-5-consola-1.jpg_1902800913.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: "100px",
                height: "100vh",
                }}
            >
                <div className="container text-center">
                    <h1 className="display-4 fw-bold">
                        <FaPlaystation className="me-2" />
                        Bienvenido a PlayStation World
                    </h1>
                    <p className="lead">
                        Explora las últimas novedades, consolas y juegos exclusivos.
                    </p>
                    <a href="#" className="btn btn-primary btn-lg">
                        Descubre Más
                    </a>
                </div>
            </section>

            {/* Características */}
            <section className="py-5">
                <div className="container">
                <h2 className="mb-4 text-center">¿Por qué PlayStation?</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 text-center border-0 shadow-sm">
                                <img
                                src="https://dplnews.com/wp-content/uploads/2024/09/dplnews_ps5_vr110924.png"
                                className="card-img-top"
                                alt="Rendimiento"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Rendimiento de Última Generación</h5>
                                    <p className="card-text">
                                        Procesador ultra rápido y gráficos 4K nativo para inmersión total.
                                    </p>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4">
                            <div className="card h-100 text-center border-0 shadow-sm">
                                <img
                                src="https://cdn-wp.thesportsrush.com/2024/01/989c0269-god-of-war-and-horizon-zero-dawn-tv-series.jpg?format=auto&w=3840&q=75"
                                className="card-img-top"
                                alt="Juegos Exclusivos"
                                />
                                <div className="card-body">
                                <h5 className="card-title">Juegos Exclusivos</h5>
                                <p className="card-text">
                                    Títulos icónicos como God of War, Horizon y más solo en PlayStation.
                                </p>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4">
                            <div className="card h-100 text-center border-0 shadow-sm">
                                <img
                                src="https://www.hd-tecnologia.com/imagenes/articulos/2018/10/El-cambio-de-nombre-de-usuario-en-PlayStation-Network-viene-con-riesgos.png"
                                className="card-img-top"
                                alt="Comunidad"
                                />
                                <div className="card-body">
                                <h5 className="card-title">Comunidad Global</h5>
                                <p className="card-text">
                                    Conéctate con amigos y jugadores de todo el mundo en PS Network.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Galería de Juegos Destacados */}
            <section className="py-5 bg-light">
            <div className="container">
                <h2 className="mb-4 text-center">Juegos Destacados</h2>
                <div className="row g-4">
                {featuredTitles.map((title, idx) => {
                    // Ahora asignamos directamente según el índice:
                    const imgSrc = featuredImages[idx];

                    return (
                    <div className="col-sm-6 col-lg-3" key={idx}>
                        <div className="card h-100 border-0 shadow-sm">
                        <img
                            src={imgSrc}
                            className="card-img-top"
                            alt={title}
                        />
                        <div className="card-body text-center">
                            <h6 className="card-title">{title}</h6>
                            <a href="#" className="btn btn-sm btn-outline-primary">
                            Ver más
                            </a>
                        </div>
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>
            </section>



            {/* Call to Action */}
            <section className="py-5 text-white" style={{ backgroundColor: "#0d6efd" }}>
                <div className="container text-center">
                <h3 className="mb-3">¡Mantente al día con PlayStation!</h3>
                <p className="mb-4">
                    Suscríbete a nuestro boletín para recibir noticias, lanzamientos y ofertas exclusivas.
                </p>
                <form className="row justify-content-center">
                    <div className="col-md-6">
                    <div className="input-group">
                        <input
                        type="email"
                        className="form-control"
                        placeholder="Tu correo electrónico"
                        />
                        <button className="btn btn-dark" type="submit">
                        Suscribirse
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </section>
        </div>
    );
}

export default Home;