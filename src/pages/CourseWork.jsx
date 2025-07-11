import { useState } from 'react';
import './CourseWork.css';
import monitaSes1Img1 from '../assets/ses1/monita-ses1-1.jpg';
import monitaSes1Img2 from '../assets/ses1/monita-ses1-2.jpg';
import monitaSes1Img3 from '../assets/ses1/monita-ses1-3.jpg';
import monitaSes1Img4 from '../assets/ses1/monita-ses1-4.jpg';

import monitaSes2Img1 from '../assets/ses2/monita-ses2-1.jpg';
import monitaSes2Img2 from '../assets/ses2/monita-ses2-2.jpg';
import monitaSes2Img3 from '../assets/ses2/monita-ses2-3.jpg';

import monitaSes3Img1 from '../assets/ses3/monita-ses3-1.jpg';
import monitaSes3Img2 from '../assets/ses3/monita-ses3-2.jpg';

import monitaSes4Img1 from '../assets/ses4/monita-ses4-1.jpg';
import monitaSes4Img2 from '../assets/ses4/monita-ses4-2.jpg';

import monitaSes5 from '../assets/ses5/monita-ses5.mp4';

import monitaSes6Img1 from '../assets/ses6/monita-ses6-1.jpg';
import monitaSes6Img2 from '../assets/ses6/monita-ses6-2.jpg';
import monitaSes6Img3 from '../assets/ses6/monita-ses6-3.jpg';
import monitaSes6Img4 from '../assets/ses6/monita-ses6-4.jpg';

import monitaSes7Img1 from '../assets/ses7/monita-ses7-1.jpg';
import monitaSes7Img2 from '../assets/ses7/monita-ses7-2.jpg';
import monitaSes7Img3 from '../assets/ses7/monita-ses7-3.jpg';
import monitaSes7Img4 from '../assets/ses7/monita-ses7-4.jpg';
import monitaSes7Img5 from '../assets/ses7/monita-ses7-5.jpg';
import monitaSes7Img6 from '../assets/ses7/monita-ses7-6.jpg';
import monitaSes7Img7 from '../assets/ses7/monita-ses7-7.jpg';
import monitaSes7Img8 from '../assets/ses7/monita-ses7-8.jpg';
import monitaSes7Img9 from '../assets/ses7/monita-ses7-9.jpg';

import monitaSes8Img1 from '../assets/ses8/monita-ses8-1.jpg';
import monitaSes8Img2 from '../assets/ses8/monita-ses8-2.jpg';

const sessions = {
  1: (
        <div className="galeria">
        <img src={monitaSes1Img1} alt="Trabajo sesión 1.1" className="galeria-img" />
        <img src={monitaSes1Img2} alt="Trabajo sesión 1.2" className="galeria-img" />
        <img src={monitaSes1Img3} alt="Trabajo sesión 1.3" className="galeria-img" />
        <img src={monitaSes1Img4} alt="Trabajo sesión 1.4" className="galeria-img" />
        </div>
    ),

  2: (
        <div className="galeria">
        <img src={monitaSes2Img1} alt="Trabajo sesión 2.1" className="galeria-img" />
        <img src={monitaSes2Img2} alt="Trabajo sesión 2.2" className="galeria-img" />
        <img src={monitaSes2Img3} alt="Trabajo sesión 2.3" className="galeria-img" />
        </div>
    ),

  3: (
        <div className="galeria">
        <img src={monitaSes3Img1} alt="Trabajo sesión 3.1" className="galeria-img" />
        <img src={monitaSes3Img2} alt="Trabajo sesión 3.2" className="galeria-img" />
        </div>
    ),

  4: (
        <div className="galeria">
        <img src={monitaSes4Img1} alt="Trabajo sesión 4.1" className="galeria-img" />
        <img src={monitaSes4Img2} alt="Trabajo sesión 4.2" className="galeria-img" />
        </div>
    ),

  5: (
        <div className="video-container">
        <video controls width="100%" style={{ maxWidth: '800px', borderRadius: '12px' }}>
            <source src={monitaSes5} type="video/mp4" />
            Tu navegador no soporta el video.
        </video>
        </div>
    ),

  6: (
        <div className="galeria">
        <img src={monitaSes6Img1} alt="Trabajo sesión 6.1" className="galeria-img" />
        <img src={monitaSes6Img2} alt="Trabajo sesión 6.2" className="galeria-img" />
        <img src={monitaSes6Img3} alt="Trabajo sesión 6.3" className="galeria-img" />
        <img src={monitaSes6Img4} alt="Trabajo sesión 6.4" className="galeria-img" />
        </div>
    ),

  7: (
        <div className="galeria">
        <img src={monitaSes7Img1} alt="Trabajo sesión 7.1" className="galeria-img" />
        <img src={monitaSes7Img2} alt="Trabajo sesión 7.2" className="galeria-img" />
        <img src={monitaSes7Img3} alt="Trabajo sesión 7.3" className="galeria-img" />
        <img src={monitaSes7Img4} alt="Trabajo sesión 7.4" className="galeria-img" />
        <img src={monitaSes7Img5} alt="Trabajo sesión 7.5" className="galeria-img" />
        <img src={monitaSes7Img6} alt="Trabajo sesión 7.6" className="galeria-img" />
        <img src={monitaSes7Img7} alt="Trabajo sesión 7.7" className="galeria-img" />
        <img src={monitaSes7Img8} alt="Trabajo sesión 7.8" className="galeria-img" />
        <img src={monitaSes7Img9} alt="Trabajo sesión 7.9" className="galeria-img" />
        </div>
    ),

  8: (
        <div className="galeria">
        <img src={monitaSes8Img1} alt="Trabajo sesión 8.1" className="galeria-img" />
        <img src={monitaSes8Img2} alt="Trabajo sesión 8.2" className="galeria-img" />
        </div>
    ),
};

export default function CourseWork() {
  const [selected, setSelected] = useState(1);

  return (
    <main className="main-content">
      <h2 className="section-title">Trabajos del curso</h2>
      <div className="session-selector">
        {Object.keys(sessions).map(num => (
          <button
            key={num}
            onClick={() => setSelected(Number(num))}
            className={selected === Number(num) ? 'active' : ''}
          >
            Sesión {num}
          </button>
        ))}
      </div>
      <div className="session-content">
        <p>{sessions[selected]}</p>
      </div>
    </main>
  );
}
