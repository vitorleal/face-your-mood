(function () {
  //normalize getMedia
  navigator.getMedia = (navigator.getUserMedia ||
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia);

  //initial
  function faceMood() {
    var canvas = document.getElementById('canvas');
    return navigator.getMedia({ video: true }, this.showMedia, this.error);
  }

  //show camera function
  faceMood.prototype.showMedia = function (stream) {
    var video  = document.getElementById('video'),
        button = document.querySelector('.take-photo');

    video.src = window.URL.createObjectURL(stream);
    button.addEventListener('click', function () {
      faceMood.snapShot(video);
    }, false);
  };

  //Error function
  faceMood.prototype.error = function (err) {
    console.log(err);
  };

  //make a snapshot
  faceMood.snapShot = function (video) {
    var w = video.videoWidth/2,
        h = video.videoHeight/2;

    canvas.width  = w;
    canvas.height = h;
    canvas.getContext('2d').drawImage(video, 0, 0, w, h);
    canvas.classList.add('show');
  };

  var camera = new faceMood();
})();
