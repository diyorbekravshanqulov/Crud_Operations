<template>
  <div
    class="flex items-center justify-center h-screen w-full bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden px-[5%] max-md:px-[15%]"
  >
    <div class="relative w-full h-full">
      <div
        class="absolute bg-gradient-to-r from-gray-400 to-gray-600 top-[-100px] left-[-300px] w-[900px] h-[900px] rounded-full shadow-xl"
      ></div>
      <div
        class="absolute bg-gradient-to-r from-gray-400 to-gray-600 opacity-60 w-[60px] h-[180px] rounded-full top-[250px] left-[500px]"
      ></div>
      <div
        class="absolute bg-gradient-to-r from-gray-400 to-gray-600 opacity-60 w-[40px] h-[80px] rounded-full rotate-[55deg] top-[650px] left-[340px]"
      ></div>
      <div
        class="absolute bg-gradient-to-r from-gray-400 to-gray-600 opacity-60 w-[65px] h-[120px] rounded-full rotate-[250deg] top-[-20px] left-[40px]"
      ></div>

      <div
        class="star absolute bg-gray-400 w-[5px] h-[5px] rounded-full opacity-40 top-[40%] left-[50%] animation-delay-[1s]"
      ></div>
      <div
        class="star absolute bg-gray-400 w-[5px] h-[5px] rounded-full opacity-40 top-[60%] left-[90%] animation-delay-[3s]"
      ></div>
      <div
        class="star absolute bg-gray-400 w-[5px] h-[5px] rounded-full opacity-40 top-[10%] left-[70%] animation-delay-[2s]"
      ></div>
      <div
        class="star absolute bg-gray-400 w-[5px] h-[5px] rounded-full opacity-40 top-[90%] left-[40%]"
      ></div>
      <div
        class="star absolute bg-gray-400 w-[5px] h-[5px] rounded-full opacity-40 top-[20%] left-[30%] animation-delay-[0.5s]"
      ></div>

      <div
        class="absolute md:left-[100px] left-[3%] md:top-[400px] top-1/2 transform translate-y-[-60%] font-righteous text-[#363e49] text-center md:text-left"
      >
        <div class="text-[5em] md:text-[10em]">404</div>
        <div class="text-[1.5em] md:text-[2em]">Hmmm...</div>
        <div class="opacity-50">
          It looks like one of the developers fell asleep
        </div>
        <div class="flex flex-col md:flex-row">
          <button
            @click="goHome"
            class="min-w-[7em] mt-[3em] mr-[0.5em] max-md:py-3 py-2 px-10 outline-none border-2 border-[#2f3640] bg-transparent rounded-full text-[#242a31] font-medium cursor-pointer transition duration-200 text-[0.75em] hover:border-[#fff] font-righteous hover:text-[#fff] hover:shadow-2xl hover:shadow-white error__button--active"
          >
            HOME
          </button>
          <button
            @click="goBack"
            class="min-w-[7em] mt-[3em] mr-[0.5em] max-md:py-3 py-2 px-10 outline-none border-2 border-[#2f3640] bg-transparent rounded-full text-[#242a31] font-medium cursor-pointer transition duration-200 text-[0.75em] hover:border-[#fff] font-righteous hover:text-[#fff] hover:shadow-2xl hover:shadow-white"
          >
            BACK
          </button>
        </div>
      </div>

      <canvas
        id="cord"
        class="absolute h-[300px] w-[300px] md:h-[500px] md:w-[500px]"
      ></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const goHome = () => {
  router.push("/").then(() => {
    location.reload();
  });
};

const goBack = () => {
  router.go(-1).then(() => {
    location.reload();
  });
};

function drawVisor() {
  const canvas = document.getElementById("visor");
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.beginPath();
    ctx.moveTo(5, 45);
    ctx.bezierCurveTo(15, 64, 45, 64, 55, 45);

    ctx.lineTo(55, 20);
    ctx.bezierCurveTo(55, 15, 50, 10, 45, 10);
    ctx.lineTo(15, 10);
    ctx.bezierCurveTo(15, 10, 5, 10, 5, 20);
    ctx.lineTo(5, 45);

    ctx.fillStyle = "#2f3640";
    ctx.strokeStyle = "#f5f6fa";
    ctx.fill();
    ctx.stroke();
  }
}

function animateCord() {
  const cordCanvas = document.getElementById("cord");
  const ctx = cordCanvas.getContext("2d");

  if (!ctx) return;

  let y1 = 160;
  let y2 = 100;
  let y3 = 100;

  let y1Forward = true;
  let y2Forward = false;
  let y3Forward = true;

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, cordCanvas.width, cordCanvas.height);

    ctx.beginPath();
    ctx.moveTo(130, 170);
    ctx.bezierCurveTo(250, y1, 345, y2, 400, y3);

    ctx.strokeStyle = "white";
    ctx.lineWidth = 8;
    ctx.stroke();

    if (y1 === 100) y1Forward = true;
    if (y1 === 300) y1Forward = false;

    if (y2 === 100) y2Forward = true;
    if (y2 === 310) y2Forward = false;

    if (y3 === 100) y3Forward = true;
    if (y3 === 317) y3Forward = false;

    y1Forward ? y1++ : y1--;
    y2Forward ? y2++ : y2--;
    y3Forward ? y3++ : y3--;
  }

  animate();
}

onMounted(() => {
  drawVisor();
  animateCord();
});
</script>

<style scoped>
@keyframes shimmer {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.7;
  }
}
.star {
  animation-name: shimmer;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</style>
