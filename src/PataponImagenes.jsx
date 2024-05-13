import Patapon from "./images/DescragasPatapon1QR.png";
import Patapon2 from "./images/DescragasPatapon2QR.png";
import Patapon3 from "./images/DescragasPatapon3QR.png";
import PataponFondo from "./images/PantillaNaranjo.jpg";
import p2 from "./audios/p2.mp3";
import p3 from "./audios/p3.mp3";
const pata2 = new Audio(p2);
const pata3 = new Audio(p3);
const changeBackground = (backgroundClass, sound) => {

  if (typeof sound === "undefined" || typeof sound === "") {
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
const data =[{number:1,url:Patapon,sonido:""},{number:2,url:Patapon2,sonido:pata2},{number:3,url:Patapon3,sonido:pata3}]
  return (
    <main className="container animate__animated animate__fadeIn">
      {data.map(function(item,index,arr){
        return <CarVersion number={item.number} url={item.url} sonido={item.sonido} />
      })}
      {/* <div
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
      </div> */}
    </main>
  );
}
const CarVersion = ({ number,url,sonido }) => {
  return (
    <article
      className="card"
      onMouseEnter={() => changeBackground(`background${number}`,sonido)}
      onMouseLeave={() => resetBackground(`background${number}`,sonido)}
    >
      <img src={url} alt={"Aquí va patapon" + number} ></img>
    </article>
  );

}
