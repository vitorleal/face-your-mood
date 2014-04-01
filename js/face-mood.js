(function () {
  //normalize getUserMedia
  navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia || navigator.msGetUserMedia);

  //initial
  var faceMood = function () {
    var canvas = document.getElementById('canvas');
    return navigator.getMedia({ video: true }, this.showMedia, this.error);
  };

  //show camera function
  faceMood.prototype.showMedia = function (stream) {
    var video  = document.getElementById('video'),
        button = document.querySelector('.take-photo'),
        height = window.innerHeight;

    video.src = window.URL.createObjectURL(stream);
    video.setAttribute('height', height);
    console.log(height);

    button.addEventListener('click', function () {
      faceMood.snapShot(video);
    }, false);
  };

  //Error function
  faceMood.prototype.error = function (err) {
    console.log(err);
  };

  //Canvas to Image
  faceMood.toImage = function (canvas) {
    return canvas.toDataURL('image/png');
  };

  //make a snapshot
  faceMood.snapShot = function (video) {
    canvas.classList.remove('show');

    var w   = video.videoWidth / 2,
        h   = video.videoHeight / 2,
        xhr = new XMLHttpRequest();
        //img;

    canvas.width  = w;
    canvas.height = h;
    canvas.getContext('2d').drawImage(video, 0, 0, w, h);

    //img = faceMood.toImage(canvas);
    //console.log(img);

    //Testing Lambda api
    /*xhr.open('GET', 'http://184.169.171.118/v1/detect?urls=' + img, true);
    xhr.onreadystatechange = function () {
      this.responseText;
    };
    xhr.send();*/

    canvas.classList.add('show');
  };

  var camera = new faceMood();
})();
