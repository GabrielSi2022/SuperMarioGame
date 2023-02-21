const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cont = document.getElementById('contador');

let contador = 0;

const jump = () => {
   mario.classList.add('jump');

   setTimeout(() => {
    mario.classList.remove('jump');
   }, 500);
}

const loop = setInterval(() => {
     
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition < 50 && pipePosition > 0 && marioPosition < 80){
           
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './Assets/gameover.png';
        mario.style.width = '300px'

        clearInterval(loop);
    } else{
      contador++;
      cont.innerHTML = contador;
    }
}, 10);

document.addEventListener('keydown', jump);