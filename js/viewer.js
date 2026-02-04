document.getElementById("start").onclick = async () => {
  try {
    // 画面共有ダイアログを開く
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: { cursor: "always" } // カーソルも映す
    });

    // video要素に表示
    const video = document.getElementById("video"); 
    video.srcObject = stream;

    // canvas描画ループ
    function draw() {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      requestAnimationFrame(draw);
    }
    draw();

  } catch (err) {
    alert("画面取得に失敗しました: " + err.message);
    console.error(err);
  }
};
