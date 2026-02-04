const img = document.getElementById("screen");
const channel = new BroadcastChannel("tv-share");

channel.onmessage = e => {
  img.src = URL.createObjectURL(e.data);
};

/* 自動フルスクリーン */
function fullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(()=>{});
  }
}
window.onload = fullscreen;
document.addEventListener("click", fullscreen);
