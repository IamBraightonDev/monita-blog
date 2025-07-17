import monitaEspecial1 from '../assets/special/monita-especial1.jpg';
import monitaEspecial2 from '../assets/special/monita-especial2.jpg';
import monitaEspecial3 from '../assets/special/monita-especial3.jpg';
import monitaEspecial4 from '../assets/special/monita-especial4.jpg';
import monitaEspecial5 from '../assets/special/monita-especial5.jpg';
import monitaEspecial6 from '../assets/special/monita-especial6.jpg';
import monitaEspecial7 from '../assets/special/monita-especial7.jpg';
import monitaEspecial8 from '../assets/special/monita-especial8.jpg';

export default function Special() {
  const trabajos = [
    {
      img: monitaEspecial1,
      texto: "¡Alondraa, espérame!, gritó Aghatta mientras sacaba fuerzas para seguirle el paso y no quedarse atrás. Son demasiadas escaleras, murmuró."
    },
    {
      img: monitaEspecial2,
      texto: "Sus compañeras de colegio y ellas habían decido ir a la playa luego de clases. Ya que no tenían casi tareas, sus padres les daban permiso y sobre todo querían vivir experiencias para el recuerdo."
    },
    {
      img: monitaEspecial3,
      texto: "Aghatta tenía una sonrisa de oreja a oreja cuando vió la playa, aunque no estaban seguras sobre qué playa se encontraban, eso no era impedimento para poder disfrutar el momento."
    },
    {
      img: monitaEspecial4,
      texto: "Oh no, no es de arena, ¿igual nos metemos al mar?, le preguntó Aghatta a Alondra. Obvio que sí no tengas miedo siquiera para mojarnos los pies, le respondió."
    },
    {
      img: monitaEspecial5,
      texto: "Alondra, ¿no te parece relajante el sonido de la playa? Sí, sobre todo ahora que mi mamá me tiene estresada con la universidad, los exámenes, la academia, pero si seguimos en 4to, ¿por qué adelantarse?, ojalá mi mamá fuera como tu papá, que te escucha y entiende. Sí, la verdad es que si ha sido bien comprensible en darme mi tiempo para poder decidir, pero no te preocupes que seguro tu mamá va a entender, igual si pasa algo le pedimos ayuda a mi papá y todo estará bien. Gracias de verdad."
    },
    {
      img: monitaEspecial6,
      texto: "Pasaron las horas, conversaron de muchas más cosas y oscureció, por lo que tomaron sus mochilas y emprendieron el viaje de regreso, compartiendo risas y sonrisas por la experiencia que habían vivido."
    },
    {
      img: monitaEspecial7,
      texto: "Alondra y Aghatta hicieron una parada en una venta de salchipapas, pidieron algo de comer y se sentaron en el parque a esperar que les despacharan, en eso vieron que se reflejaban en el piso. Tomémonos una foto, dijo Aghatta. Se estaban tomando la foto cuando escucharon a lo lejos una voz como de 56 años gritando: ¡Aghatta, Aghatta!. Vio el reflejo del piso pero este parecía desvanecerse poco a poco."
    },
    {
      img: monitaEspecial8,
      texto: "¡Aghatta, Despierta!. La había estado llamando la profesora de educación física. Resulta que se había quedado dormida y todo había sido un pequeño sueño que había tenido, donde recordaba una salida que tuvo antes de que sus tíos la enviaran al internado en el que se encontraba luego de que hubiera fallecido su papá."
    }
  ];

  return (
    <main className="main-content">
      <h2 className="section-title">Trabajo especial</h2>

      <div className="galeria-grid">
        {trabajos.map((trabajo, i) => (
          <div className="tarjeta" key={i}>
            <img src={trabajo.img} alt={`Trabajo especial ${i + 1}`} className="galeria-img" />
            <p className="intro-sesiones">{trabajo.texto}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
