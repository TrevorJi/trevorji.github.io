function shuffle(){
    var liblist = document.querySelector('#libList');
    for (var i = liblist.children.length; i >= 0; i--) {
        liblist.appendChild(liblist.children[Math.random() * i | 0]);
        }
}

function encode(){
        var text = document.querySelector('.journal').innerText;
        var a = text.split("");
        var n = a.length;
    
        for(var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        document.querySelector('.journal').innerText = a.join("");
}

function turnPages(path){
    var audio = new Audio('/resources/turning_pages.mp3');
    audio.addEventListener("canplaythrough", function(){
        var duration = audio.duration;
        audio.play();
        setTimeout(function(){location.replace(path);}, duration*1000 + 300);
    });
}

function hexCopy(){
        var hexP = document.querySelector('p.hex');
        navigator.clipboard.writeText(hexP.textContent);
        alert("Hex Coordinate Copied");
}

//도입부 함수들 - 정답 입력 시 localStorage 값 변경
function gateKeeper() {
    var gateStatus = localStorage.getItem("gateStatus");
    if(gateStatus === "opened"){
        window.location.replace('welcome.html');
    } else {
        localStorage.setItem("themonster", "not met");
        localStorage.setItem("thehero", "not met");
        localStorage.setItem("theassassin", "not met");
        localStorage.setItem("theclown", "not met");
        localStorage.setItem("theblind", "not met");
        localStorage.setItem("therabbit", "not met");
    }
}

function isShe(event) {
    var input = document.querySelector('#firstquestion');
    var answer = input.value.toLowerCase();
    if(answer === 'maimai'){
        document.getElementById('q1').style.display = "none";
        document.getElementById('q2').style.display = "grid";
        event.preventDefault();
    } else {
        window.location.replace("/404.html");
        event.preventDefault();
    }
}

function isMe(event) {
    var input = document.querySelector('#secondquestion');
    var answer = input.value.toLowerCase();
    if(answer === 'talanvantus'){
        window.location.replace("/welcome.html");
        localStorage.setItem("gateStatus", "opened");
        event.preventDefault();
    } else {
        window.location.replace("/404.html");
        event.preventDefault();
    }
}

// Modal 함수들
function openModal() {
  var modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "block";
}

window.onclick = function(event) {
  var modal = document.getElementsByClassName("modal")[0];
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//Theseus 힌트 함수들

function hide(){
    var div = document.querySelector('#hint');
    div.style.opacity = 0;
}

function showTheseus() {
    var div = document.querySelector('#hint');
    div.innerHTML = '<p>Theseus is <span style="color:white; font-weight:bold;">winning</span>.</p>';
    div.style.opacity = 1;
}

function showAsterion() {
    var div = document.querySelector('#hint');
    div.innerHTML = '<p>Asterion is <span style="color:white; font-weight:bold;">losing</span>.</p>';
    div.style.opacity = 1;
}

function showAriadne() {
    var div = document.querySelector('#hint');
    div.innerHTML = '<p>Ariadne is <span style="color:red; font-weight:bold;">smiling</span>.</p>';
    div.style.opacity = 1;
}

//Journals 퀴즈 함수들 - 정답 입력 시 localStorage 값 변경

function whatIsHeCalled(event) {
    var input = document.querySelector('#thirdquestion');
    var answer = input.value.toLowerCase();
    if(answer === 'minotaur'){
        event.preventDefault();
        document.getElementById('q3').style.display = "none";
        document.getElementById('q4').style.display = "block";
    } else {
        event.preventDefault();
        var path = "/journals/journal@y4191pi1klx0jjgn2a9nipjs2s916yldbrlr9qdy4q...-w1-s1-v10.html";
        turnPages(path);
    }
}

function whatIsHisRealName(event) {
    var input = document.querySelector('#fourthquestion');
    var answer = input.value.toLowerCase();
    if(answer === 'asterion'){
        event.preventDefault();
        localStorage.setItem("themonster", "met");
        var path = "/journals/journalOnAsterion.html";
        turnPages(path);
    } else {
        event.preventDefault();
        var path = "/journals/journal@y4191pi1klx0jjgn2a9nipjs2s916yldbrlr9qdy4q...-w1-s1-v10.html";
        turnPages(path);
    }

}

/* Adapted Carousel JS by Jonathan Ching 
from https://codepen.io/chingy/pen/yLLZRbj*/

function loadCarousel() {
    "use strict";

    var carousel = document.getElementsByClassName('carousel')[0],
        slider = carousel.getElementsByClassName('carousel__slider')[0],
        items = slider.getElementsByClassName('carousel__slider__item'),
        links = document.querySelectorAll('.carousel a'),
        cards = document.querySelectorAll('.carousel__slider__item > .item__3d-frame');
        cards.forEach(function(element){element.addEventListener("click", moveToIndex)});
        

    var monster = localStorage.getItem("themonster"),
        hero = localStorage.getItem("thehero"),
        assassin = localStorage.getItem("theassassin"),
        clown = localStorage.getItem("theclown"),
        blind = localStorage.getItem("theblind"),
        rabbit = localStorage.getItem("therabbit");

    var width, height, totalWidth, margin = 20
    
    function init() {
        resize();
        move(Math.floor(items.length / 2));
        bindEvents();
    }
    
    function resize() {
        width = Math.max(window.innerWidth * .25, 275),
        height = window.innerHeight * .5,
        totalWidth = width * items.length;
      
        slider.style.width = totalWidth + "px";
      
        for(var i = 0; i < items.length; i++) {
            let item = items[i];
            item.style.width = (width - (margin * 2)) + "px";
            item.style.height = height + "px";
        }
    }

    function move(index) {
      
        if(index < 1) index = items.length;
        if(index > items.length) index = 1;
      
        for(var i = 0; i < items.length; i++) {
            let item = items[i],
                box = item.getElementsByClassName('item__3d-frame')[0];
            if(i == (index - 1)) {
                item.classList.add('carousel__slider__item--active');
                box.style.transform = "perspective(1200px)"; 
            } else {
              item.classList.remove('carousel__slider__item--active');
                box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
            }
        }
      
        //switch문으로 index에 따라 title의 textContent값 Journal@...으로 바꿔주기 + localStorage 값에 따라 Journal On Asterion과 같이 제목 드러내기


        slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
    }

    function moveToIndex(){
        var index = this.closest("[index]").getAttribute('index');
        move(index);
    }
        
    function bindEvents() {
        window.onresize = resize;
    }
  
    init();
    
  };