import { useState } from 'react';
import monitaInicio1 from '../assets/inicio/monita-inicio1.jpg';
import monitaInicio2 from '../assets/inicio/monita-inicio2.jpg';
import monitaInicio3 from '../assets/inicio/monita-inicio3.jpg';
import monitaInicio4 from '../assets/inicio/monita-inicio4.jpg';
import monitaInicio6 from '../assets/inicio/monita-inicio6.jpg';
import monitaInicio7 from '../assets/inicio/monita-inicio7.jpg';
import monitaInicio8 from '../assets/inicio/monita-inicio8.jpg';
import monitaInicio9 from '../assets/inicio/monita-inicio9.jpg';
import monitaInicio10 from '../assets/inicio/monita-inicio10.jpg';
import monitaInicio11 from '../assets/inicio/monita-inicio11.jpg';
import monitaInicio12 from '../assets/inicio/monita-inicio12.jpg';
import monitaInicio13 from '../assets/inicio/monita-inicio13.jpg';
import monitaInicio14 from '../assets/inicio/monita-inicio14.jpg';
import monitaInicio15 from '../assets/inicio/monita-inicio15.jpg';
import monitaInicio16 from '../assets/inicio/monita-inicio16.jpg';
import monitaImg1 from '../assets/inicio/monita-img1.jpg';
import miniMonitaImg1 from '../assets/inicio/mini-monita1.jpg';
import miniMonitaImg2 from '../assets/inicio/mini-monita2.jpg';
import miniMonitaImg3 from '../assets/inicio/mini-monita3.jpg';
import monitaGusto1 from '../assets/inicio/monita-gusto1.jpg';
import monitaGusto2 from '../assets/inicio/monita-gusto2.jpg';
import monitaGusto3 from '../assets/inicio/monita-gusto3.jpg';
import monitaGusto4 from '../assets/inicio/monita-gusto4.jpg';
import monitaGusto5 from '../assets/inicio/monita-gusto5.jpg';
import monitaGusto6 from '../assets/inicio/monita-gusto6.jpg';
import monitaGusto7 from '../assets/inicio/monita-gusto7.jpg';
import monitaGusto8 from '../assets/inicio/monita-gusto8.jpg';
import monitaGusto9 from '../assets/inicio/monita-gusto9.jpg';

export default function Home() {
  const [activeImage, setActiveImage] = useState(null);
  const openImage = (src) => setActiveImage(src);
  const closeImage = () => setActiveImage(null);

  return (
    <>
      <main className="main-content">
        <h2 className="section-title">¡Hola! Soy María José ✨</h2>

        <div className="home-header">
          <img src={monitaImg1} alt="María José" className="monita-img" />
          <p className="intro-text">
            ¡Bienvenidos a mi Blog! MJ La Monita Blogger los recibe con mucho cariño. En este espacio podrás encontrar un poco sobre mí, un trabajo especialmente hecho para este lugar y todos los trabajos realizados en el curso de Creatividad y Comunicación de la carrera de Comunicación y Medios Digitales del 1er Ciclo.
          </p>
        </div>

        <br></br>

        <div className='text-center-wrapper'>
          <h3 className="section-title-pro">Sobre mí</h3>
        </div>

        <h3 className="section-title">Mini yo</h3>
        <div className="galeria">
          {[miniMonitaImg1, miniMonitaImg2, miniMonitaImg3].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Inicio ${i + 1}`}
              className="galeria-img"
              onClick={() => openImage(img)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>

        <h3 className="section-title">Yo actual</h3>
        <div className="galeria">
          {[monitaInicio10, monitaInicio6, monitaInicio16].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Inicio ${i + 1}`}
              className="galeria-img"
              onClick={() => openImage(img)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>

        <h3 className="section-title">Actividades deportivas</h3>
        <p className="intro-text">
          A lo largo de mi vida he tenido muchos pasatiempos y actividades recreativas. De niña practiqué ballet, danza árabe, y hace unos dos años estuve en Taekwondo.
        </p>
        <div className="galeria">
          {[monitaInicio1, monitaInicio3, monitaInicio4].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Inicio ${i + 1}`}
              className="galeria-img"
              onClick={() => openImage(img)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>

        <h3 className="section-title">Mis graduaciones</h3>
        <div className="galeria">
          {[monitaInicio2, monitaInicio9, monitaInicio7].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Inicio ${i + 1}`}
              className="galeria-img"
              onClick={() => openImage(img)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>

        <h3 className="section-title">Mi momento especial</h3>
        <div className="galeria">
          {[monitaInicio11, monitaInicio12, monitaInicio13, monitaInicio14, monitaInicio15].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Inicio ${i + 1}`}
              className="galeria-img"
              onClick={() => openImage(img)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
        
        <br></br>
        <br></br>
        <br></br>

        <div className='text-center-wrapper'>
          <h3 className="section-title-pro">Mis gustos</h3>
        </div>

        <h3 className="section-title">Películas favoritas</h3>
        <div className="galeria">
          {[monitaGusto1, monitaGusto2, monitaGusto3].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Inicio ${i + 1}`}
              className="galeria-img"
              onClick={() => openImage(img)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>

        <h3 className="section-title">Series favoritas</h3>
        <div className="galeria">
          {[monitaGusto4, monitaGusto5, monitaGusto6].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Inicio ${i + 1}`}
              className="galeria-img"
              onClick={() => openImage(img)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>

        <h3 className="section-title">Canciones que me transportan a otra dimensión</h3>
        <div className="galeria">
          {[monitaGusto7, monitaGusto8, monitaGusto9].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Inicio ${i + 1}`}
              className="galeria-img"
              onClick={() => openImage(img)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>

      </main>

      {activeImage && (
        <div className="lightbox" onClick={closeImage}>
          <img src={activeImage} alt="Ampliada" />
        </div>
      )}
    </>
  );
}
