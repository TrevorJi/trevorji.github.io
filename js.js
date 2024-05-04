function reorder() {
    var obj = ('.center p');
    var count = obj.length;
    
    for(var i=1; i<=count; i++) {
    itA = ('.center p:nth-child('+i+')');
    
    rnd = rmax(count);
    if(rnd==i) continue;
    
    itB = ('.center p:nth-child('+rnd+')');
    
    var itAC = structuredClone(itA);
    var itBC = structuredClone(itB);
    
    insertAfter(itBC, itA);
    itA.remove();
    
    insertAfter(itAC, itB);
    itB.remove();
    }
    }
    
    function rmax(max){
    var n = Math.round(Math.random()*max);
    return n == 0 ? 1 : n;
    }

    function insertAfter(newNode, existingNode) {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }

function isShe() {
    var input = document.querySelector('#firstquestion');
    var answer = input.value.toLowerCase();
    if(answer == 'maimai'){
        document.getElementById('q1').style.display = "none";
    } else {
        window.location.replace("/404.html");
    }
}