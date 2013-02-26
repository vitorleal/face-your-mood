(function () {
  navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator

  function faceMood() {
    var canvas = document.getElementById('canvas');
    navigator.getMedia ({ video: true }, faceMood.showMedia, function(err) { console.log(err); });
  }

  faceMood.showMedia = function (stream) {
    var video  = document.getElementById('video'),
        button = document.querySelector('.take-photo');

    video.src = window.URL.createObjectURL(stream);
    button.addEventListener('click', function () { faceMood.snapShot(video) }, false);
  }

  faceMood.snapShot = function (video) {
    var w = video.videoWidth/2,
        h = video.videoHeight/2;

    canvas.width  = w;
    canvas.height = h;
    canvas.getContext('2d').drawImage(video, 0, 0, w, h);
    canvas.classList.add('show');
  }

  faceMood.pause = function (video) {
    video.pause();
  }

  faceMood();
})();
