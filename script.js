var arr = [
    {songName:"Joota Japani - KR$NA",poster:"./poster/joota japani.webp",url:"./songs/Joota Japani_320(PagalWorld.com.pe).mp3",duration:"3:25"},
    {songName:"Aksar - Emiway Bantai",poster:"./poster/aksar.webp",url:"./songs/Aksar_320(PagalWorld.com.pe).mp3",duration:"3:25"},
    {songName:"W -Emiway Bantai",poster:"./poster/w.jpg",url:"./songs/W_320(PagalWorld.com.pe).mp3",duration:"3:25"},
    {songName:"Fake Once - Emiway Bantai",poster:"./poster/fake once.jpg",url:"./songs/Fake ones_320(PagalWorld.com.pe).mp3",duration:"3:25"},
]
var play = document.querySelector("#play");
var back = document.querySelector("#back");
var next = document.querySelector("#next");
var flag = 0;
var audio = new Audio();
document.querySelector("#poster").style.backgroundImage = `url('${arr[0].poster}')`;
let selected = 0;
function displaySong(){
    var clutter="";
    arr.forEach(function(elem,index){
    clutter +=`<div class="box" id = "${index}">
    <div class="simg">
        <img src="${elem.poster}" alt="">
    </div>
    <div class="sname">
        <h3>${elem.songName}</h3>
    </div>
    <div class="sdur">
        <h3>${elem.duration}</h3>
    </div>
</div>`
})
document.querySelector(".right").innerHTML = clutter;
audio.src = arr[selected].url;
document.querySelector("#poster").style.backgroundImage = `url('${arr[selected].poster}')`;
}
function playmusic(){
    document.querySelector(".right").addEventListener("click", function(dets){
        selected = dets.target.id;
        displaySong();
        audio.play();
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        flag = 1;
    })
}

play.addEventListener("click",function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        audio.play();
        flag = 1;
    }else{
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
        audio.pause();
        flag = 0;
    }
})

next.addEventListener("click", function(){
   if(selected< arr.length - 1){
    selected++
    displaySong();
    audio.play();
   }else{
    next.style.opacity = 0.3;
   }
})
back.addEventListener("click", function(){
   if(selected> 0 ){
    selected--
    displaySong();
    audio.play();
   }else{
    back.style.opacity = 0.3;
   }
})








playmusic();
displaySong();



