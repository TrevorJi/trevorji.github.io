function shuffle(){
    var list = document.querySelector('div.center');
    for (var i = list.children.length; i >= 0; i--) {
        list.appendChild(list.children[Math.random() * i | 0]);
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

function isMe() {
    var input = document.querySelector('#secondquestion');
    var answer = input.value.toLowerCase();
    if(answer === 'talanvantus'){
        window.location.replace("/welcome.html");
    } else {
        window.location.replace("/404.html");
    }
}