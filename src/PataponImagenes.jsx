import Patapon from "./images/DescragasPatapon1QR.png";
import Patapon2 from "./images/DescragasPatapon2QR.png";
import Patapon3 from "./images/DescragasPatapon3QR.png";
import PataponFondo from "./images/PantillaNaranjo.jpg";
import p2 from "./audios/p2.mp3";
import p3 from "./audios/p3.mp3";
export function PataponImagenes() {
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
  return (
    <div className="container animate__animated animate__fadeIn">
      <div
        className="card"
        onMouseEnter={() => changeBackground("background1")}
        onMouseLeave={() => resetBackground("background1")}
      >
        <img src={Patapon} alt="Aquí va patapon 1"></img>
      </div>
      <div
        className="card"
        onMouseEnter={() => changeBackground("background2", pata2)}
        onMouseLeave={() => resetBackground("background2", pata2)}
      >
        <img src={Patapon2} alt="Aquí va patapon 2"></img>
      </div>
      <div
        className="card"
        onMouseEnter={() => changeBackground("background3", pata3)}
        onMouseLeave={() => resetBackground("background3", pata3)}
      >
        <img src={Patapon3} alt="Aqui va Patapon 3"></img>
      </div>
    </div>
  );
}
