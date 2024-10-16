console.log("Welcome to Spotify");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressbar = document.getElementById("progressbar");
let gif = document.getElementById("gif");
let songitems = Array.from(document.getElementsByClassName("songitems"));

let songs = [
  {
    songname: "Dooriyan - Zaeden",
    filePath: "1.mp3",
    coverPath: "cover1.png",
  },
  {
    songname: "2U - Justin Beiber",
    filePath: "2.mp3",
    coverPath: "cover2.png",
  },
  {
    songname: "Pehli dafa -  Atif Aslam",
    filePath: "3.mp3",
    coverPath: "cover3.png",
  },
  {
    songname: "SummerHigh - Ap dhillon",
    filePath: "4.mp3",
    coverPath: "cover4.png",
  },
  {
    songname: "Mi amor - Sharn",
    filePath: "5.mp3",
    coverPath: "cover5.png",
  },
  {
    songname: "Tera Yaar hun mein - Arijit singh",
    filePath: "6.mp3",
    coverPath: "cover6.png",
  },
  {
    songname: "Zindabaad Yaarian -  Ammy Virk",
    filePath: "7.mp3",
    coverPath: "cover7.png",
  },
  {
    songname: "Tum hi Ho  - Aashiqui 2",
    filePath: "8.mp3",
    coverPath: "cover8.png",
  },
  {
    songname: "Sunshine - 3 idiots",
    filePath: "9.mp3",
    coverPath: "cover9.png",
  },
  {
    songname: "Betichor - Munna",
    filePath: "10.mp3",
    coverPath: "cover10.png",
  },
];
songitems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});
//audioElement.play();

// handle play pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
// listen to events
audioElement.addEventListener("timeupdate", () => {
  // update seek bar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  progressbar.value = progress;
});
progressbar.addEventListener("change", () => {
  audioElement.currentTime = (progressbar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);
