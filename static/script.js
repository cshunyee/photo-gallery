var img_2021 = [
  "1.jpeg", "2.MOV", "3.mov", "4.mov", "5.jpg", "6.jpg", "7.mp4", "8.mp4", "9.mp4", "10.mov", "11.jpg", "12.mov", "13.jpg",
  "14.mov", "15.jpeg", "16.JPG", "17.JPG", "18.jpeg", "19.MOV", "20.JPG", "21.MOV", "22.JPG", "23.JPG", "24.JPG", "25.JPG",
  "26.JPG", "27.MOV", "28.MOV", "29.jpeg", "30.JPG", "31.jpeg", "32.jpeg", "33.JPG", "34.JPG", "35.jpeg", "36.jpeg", "37.jpeg",
  "38.JPG", "39.MOV", "40.jpeg", "41.jpeg", "42.JPG", "43.jpeg", "44.jpeg", "45.JPG", "46.JPG", "47.jpeg", "48.jpeg", "49.JPG",
  "50.JPG", "51.mp4", "52.mp4", "53.mp4", "54.mp4", "55.mp4", "56.mp4", "57.mp4", "58.JPG", "59.JPG", "60.MOV", "61.JPG", "62.jpeg",
  "63.jpeg", "64.mov", "65.mp4"]

var img_2020 = [
  "1.jpg", "2.jpg", "3.mov", "4.jpg", "5.mov", "6.mov", "7.mov", "8.mov", "9.jpg", "10.jpeg", "11.jpeg", "12.JPG", "13.jpeg", "14.jpeg",
  "15.jpeg", "16.jpeg", "17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg", "21.jpeg", "22.jpeg", "23.mp4", "24.mp4", "25.mp4",
  "26.mp4"
]

var container2020 = document.getElementById("2020")
var container2021 = document.getElementById("2021")
var bgMusic = document.getElementById("bg-music")

document.addEventListener("DOMContentLoaded", function() {
  video_tag = ["mov", "MOV", "mp4", "MP4"];
  years = ["2020", "2021"];
  years.forEach(year => {
    srcList = year == "2020" ? img_2020 : img_2021;
    parentToAppend =  year == "2020" ? container2020 : container2021;
    srcList.forEach(item => {
      if (video_tag.includes(item.split(".")[1])) {
        video = document.createElement("video");
        video.classList.add("zone", "img-responsive");
        video.loop = true;
        video.autoplay = true;
        video.muted = true;

        source = document.createElement("source");
        source.setAttribute("type", "video/mp4");
        source.setAttribute("src", `static/image/${year}/${item}`);
        video.appendChild(source);
        parentToAppend.appendChild(video);
      } else {
        img = document.createElement("img");
        img.classList.add("zone", "img-responsive");
        img.setAttribute("src", `static/image/${year}/${item}`);
        parentToAppend.appendChild(img);
      }
    });
  });
});

document.addEventListener("mouseover", function(e) {
  if (e.target.tagName == "VIDEO") {
    e.target.muted = false;
    e.target.volumn = 0.8;
    bgMusic.volume = 0.5;
  }
});

document.addEventListener("mouseout", function(e) {
  if (e.target.tagName == "VIDEO") {
    e.target.muted = true;
    bgMusic.volume = 1;
  }
});

// Rotate Cube
var xAngle = 0, yAngle = 0;
var cube = document.getElementById("cube")
document.addEventListener('keydown', function(e) {
  switch(e.keyCode) {
    case 37: // left
      yAngle -= 90;
      break;
    case 38: // up
      xAngle += 90;
      break;
    case 39: // right
      yAngle += 90;
      break;
    case 40: // down
      xAngle -= 90;
      break;
  };

cube.style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
}, false);


// clock
$(function(){
    var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
        prop,
        el = document.createElement('div');

    for(var i = 0, l = props.length; i < l; i++) {
        if(typeof el.style[props[i]] !== "undefined") {
            prop = props[i];
            break;
        }
    }

    if(window.location.hash === "#clock") {
        startClock();
    }

    function startClock() {
        var angle = 360/60,
            date = new Date(),
            hour = date.getHours() % 12,
            minute = date.getMinutes(),
            second = date.getSeconds(),
            hourAngle = (360/12) * hour + (360/(12*60)) * minute;

        if(prop) {
            $('#minute')[0].style[prop] = 'rotate('+angle * minute+'deg)';
            $('#second')[0].style[prop] = 'rotate('+angle * second+'deg)';
            $('#hour')[0].style[prop] = 'rotate('+hourAngle+'deg)';
        }
    }
});
