import Patapon from "./images/p1.png";
import Patapon2 from "./images/p2.png";
import Patapon3 from "./images/p3.png";
import PataponFondo from "./images/PantillaNaranjo.jpg";
import p2 from "./audios/p2.mp3";
import p3 from "./audios/p3.mp3";
import p1 from "./audios/bonberabo.mp3";
const pata = new Audio(p1);
const pata2 = new Audio(p2);
const pata3 = new Audio(p3);
const changeBackground = (backgroundClass, sound) => {
  if (typeof sound === "undefined") {
    document.body.classList.add(backgroundClass);
  } else {
    document.body.classList.add(backgroundClass);
    sound.play();
  }
};
const resetBackground = (backgroundClass, sound) => {
  if (typeof sound === "undefined") {
    document.body.classList.remove(backgroundClass);
  } else {
    document.body.classList.remove(backgroundClass);
    sound.pause();
    sound.currentTime = 0;
  }
};
export function PataponImagenes() {
  const data = [
    { number: 1, url: Patapon, sonido: pata },
    { number: 2, url: Patapon2, sonido: pata2 },
    { number: 3, url: Patapon3, sonido: pata3 },
  ];
  return (
    <main className=" animate__animated animate__fadeIn">
      {data.map(function (item, index, arr) {
        return (
          <CarVersion
            number={item.number}
            url={item.url}
            sonido={item.sonido}
          />
        );
      })}
    </main>
  );
}
const CarVersion = ({ number, url, sonido }) => {
  return (
    <article
      className="card"
      onMouseEnter={() => changeBackground(`background${number}`, sonido)}
      onMouseLeave={() => resetBackground(`background${number}`, sonido)}
    >
      <img src={url} alt={"Aquí va patapon" + number}></img>
    </article>
  );
};
