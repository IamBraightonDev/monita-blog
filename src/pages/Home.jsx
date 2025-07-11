import { useState } from 'react';
import monitaInicio1 from '../assets/inicio/monita-inicio1.jpg';
import monitaInicio2 from '../assets/inicio/monita-inicio2.jpg';
import monitaInicio3 from '../assets/inicio/monita-inicio3.jpg';
import monitaImg1 from '../assets/inicio/monita-img1.jpg';

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
            Me llamo <strong>María José Candela Parra</strong>, tengo 18 años y soy estudiante de la carrera de
            <strong> Comunicaciones y Medios Digitales</strong>. Este blog es una ventanita creativa donde comparto parte de mis aprendizajes, ideas visuales y experimentos comunicativos.
            <br /><br />
            A lo largo de mi vida he tenido muchos pasatiempos y actividades recreativas. De niña practiqué ballet, danza árabe, y hace unos dos años estuve en gimnasia y Taekwondo. Me gusta hacer actividades físicas. Sin embargo, también disfruto mucho tomar fotos a los paisajes o cualquier animal que esté posando, y leer desde clásicos hasta obras no tan conocidas. Estoy obsesionada con tener un hermoso e inmenso librero y voy en proceso.
          </p>
        </div>

        <h3 className="section-subtitle">Algunos momentos visuales 📸</h3>
        <div className="galeria">
          {[monitaInicio1, monitaInicio2, monitaInicio3].map((img, i) => (
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
