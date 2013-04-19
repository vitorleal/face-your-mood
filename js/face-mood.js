(function () {
  navigator.getMedia = (navigator.getUserMedia ||
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia);

  function faceMood() {
    var canvas = document.getElementById('canvas');
    navigator.getMedia({ video: true }, this.showMedia, function(err) { console.log(err); });
  }

  faceMood.prototype.showMedia = function (stream) {
    var video  = document.getElementById('video'),
        button = document.querySelector('.take-photo');

    video.src = window.URL.createObjectURL(stream);
    button.addEventListener('click', function () { faceMood.snapShot(video) }, false);
  }

  faceMood.prototype.snapShot = function (video) {
    var w = video.videoWidth/2,
        h = video.videoHeight/2;

    canvas.width  = w;
    canvas.height = h;
    canvas.getContext('2d').drawImage(video, 0, 0, w, h);
    canvas.classList.add('show');
  }

  faceMood.prototype.pause = function (video) {
    video.pause();
  }

  camera = new faceMood();
})();
