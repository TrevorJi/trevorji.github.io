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

// Drag & Drop 함수들
function drag(event){
    event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    var dragged = document.getElementById(data);
    if(event.target.id.includes("letter")){
        var tmp = document.createElement('span');
        event.target.before(tmp);
        dragged.before(event.target);
        tmp.replaceWith(dragged);
    }else if(event.target.id.includes("socket") && event.target.childElementCount > 0){
        var tmp = document.createElement('span');
        var target = event.target.children[0];
        target.before(tmp);
        dragged.before(target);
        tmp.replaceWith(dragged);
    }else{
        event.target.appendChild(dragged);
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

function whoIsWinning(event) {
    var answer = document.querySelector('input[name="pictureOptions"]:checked').value;
    if(answer === 'theseus'){
        event.preventDefault();
        document.getElementById('q5').style.display = "none";
        document.getElementById('q6').style.display = "block";
    } else {
        event.preventDefault();
        var path = "/journals/journal@t4mtn4uyuhe88aek8sdoo1s2rap0t58h3ceilo3.html";
        turnPages(path);
    }
}

function whoIsLosing(event) {
    var answer = document.querySelector('input[name="pictureOptions"]:checked').value;
    if(answer === 'asterion'){
        event.preventDefault();
        document.getElementById('q6').style.display = "none";
        document.getElementById('q7').style.display = "block";
    } else {
        event.preventDefault();
        var path = "/journals/journal@t4mtn4uyuhe88aek8sdoo1s2rap0t58h3ceilo3.html";
        turnPages(path);
    }
}

function whoIsSmiling(event) {
    var answer = document.querySelector('input[name="pictureOptions"]:checked').value;
    if(answer === 'ariadne'){
        event.preventDefault();
        localStorage.setItem("thehero", "met");
        var path = "/journals/journalOnTheseus.html";
        turnPages(path);
    } else {
        event.preventDefault();
        var path = "/journals/journal@t4mtn4uyuhe88aek8sdoo1s2rap0t58h3ceilo3.html";
        turnPages(path);
    }
}

function whatIsTrue(event) {
    var answer = document.querySelectorAll('input[name="selectOptions"]:checked').length;
    if(answer === 0){
        event.preventDefault();
        document.getElementById('q8').style.display = "none";
        document.getElementById('q9').style.display = "block";
    } else {
        event.preventDefault();
        var path = "/journals/journal@3e59r4wdkas1evh2v5gvk4hgt0l8ljnkxrq7c4l...-w3-s2-v23.html";
        turnPages(path);
    }
}

function whatIsPermitted(event) {
    var answer = document.querySelectorAll('input[name="selectOptions"]:checked').length;
    if(answer === 3){
        event.preventDefault();
        localStorage.setItem("theassassin", "met");
        var path = "/journals/journalOnAltair.html";
        turnPages(path);
    } else {
        event.preventDefault();
        var path = "/journals/journal@3e59r4wdkas1evh2v5gvk4hgt0l8ljnkxrq7c4l...-w3-s2-v23.html";
        turnPages(path);
    }
}

function whatIsTheWord(event) {
    var answer = document.querySelector('#socket1').textContent
               + document.querySelector('#socket2').textContent
               + document.querySelector('#socket3').textContent
               + document.querySelector('#socket4').textContent
               + document.querySelector('#socket5').textContent
               + document.querySelector('#socket6').textContent;
    if(answer === 'ginger'){
        event.preventDefault();
        localStorage.setItem("theclown", "met");
        var path = "/journals/journalOnTimMinchin.html";
        turnPages(path);
    }else{
        event.preventDefault();
        var path = "/journals/journal@01cadlqkz82jhlm3j1ikc1cnscd25voi56a5n5n...-w2-s1-v32.html";
        turnPages(path);
    }
}

function showLevel2(event) {
    event.preventDefault();
    document.getElementById('mapLv1').style.display = "none";
    document.getElementById('mapLv2').style.display = "block";
}

function showLevel3(event) {
    event.preventDefault();
    document.getElementById('mapLv2').style.display = "none";
    document.getElementById('mapLv3').style.display = "block";
}

function showBorges(event) {
    event.preventDefault();
    localStorage.setItem("theblind", "met");
    var path = "/journals/journalOnBorges.html";
    turnPages(path);
}

function makeReal(event) {
    var input = document.querySelector('#makeMeReal');
    var answer = input.value;
    if(answer.includes('REAL') && answer.includes('love') && answer.includes('you')){
        event.preventDefault();
        document.getElementById('q12').style.display = "none";
        document.getElementById('q13').style.display = "block";
    } else {
        event.preventDefault();
        var path = "/journals/journal@22fnjdz8zw3sb9gp5u965duuasm41xulqovj6wu...-w1-s2-v31.html";
        turnPages(path);
    }
}

function thisHappens(event) {
    var input = document.querySelector('#whatHappened');
    var answer = input.value;
    if(answer.includes('Real')){
        event.preventDefault();
        document.getElementById('q13').style.display = "none";
        document.getElementById('q14').style.display = "block";
    } else {
        event.preventDefault();
        var path = "/journals/journal@22fnjdz8zw3sb9gp5u965duuasm41xulqovj6wu...-w1-s2-v31.html";
        turnPages(path);
    }
}

function thisMeans(event) {
    var input = document.querySelector('#whatMeaning');
    var answer = input.value;
    if(answer.includes('hurt')){
        event.preventDefault();
        localStorage.setItem("therabbit", "met");
        document.getElementById('q14').style.display = "none";
        document.getElementById('c15').style.display = "block";
        var path = "/journals/journalOnVelveteenRabbit.html";
        turnPages(path);
    } else {
        event.preventDefault();
        var path = "/journals/journal@22fnjdz8zw3sb9gp5u965duuasm41xulqovj6wu...-w1-s2-v31.html";
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

    var width, height, totalWidth, margin = 20;
    
    document.addEventListener('touchstart', handleTouchStart);        
    document.addEventListener('touchmove', handleTouchMove);
    
    var xDown = null;                                                        
    var yDown = null;
    var index = Math.floor(items.length / 2);
    
    function getTouches(event) {
      return event.touches;
    }                                                     
                                                                             
    function handleTouchStart(event) {
        const firstTouch = getTouches(event)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                
                                                                             
    function handleTouchMove(event) {
        if ( ! xDown || ! yDown ) {
            return;
        }
    
        var xUp = event.touches[0].clientX;                                    
        var yUp = event.touches[0].clientY;
    
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
                                                                             
        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                index = index - 1;
                moveToIndex(index);
                alert("horizontally swiped");
            } else {
                index = index + 1;
                moveToIndex(index);
                alert("horizontally swiped");
            }                       
        } 
        xDown = null;
        yDown = null;                                             
    };

    function init() {
        resize();
        move(Math.floor(items.length / 2));
        bindEvents();

        if(clown === "met") links[0].href = "/journals/journalOnTimMinchin.html";
        if(hero === "met") links[1].href = "/journals/journalOnTheseus.html";
        if(monster === "met") links[2].href = "/journals/journalOnAsterion.html";
        if(assassin === "met") links[3].href = "/journals/journalOnAltair.html";
        if(blind === "met") links[4].href = "/journals/journalOnBorges.html";
        if(rabbit === "met") links[5].href = "/journals/journalOnVelveteenRabbit.html";
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

        slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
    }

    function moveToIndex(){
        index = this.closest("[index]").getAttribute('index');
        move(index);
    }
        
    function bindEvents() {
        window.onresize = resize;
    }
  
    init();
    
  };