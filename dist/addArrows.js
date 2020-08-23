// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement2() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput2").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL2").appendChild(li);
    }
    document.getElementById("myInput2").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";

            var currentArrowCoordinateStart = div.innerText[0] + div.innerText[1];
            var currentArrowCoordinateEnd = div.innerText[3] + div.innerText[4];

            for(var i = 0; i < window.arrows.length; i++){
                let someArrowStart = window.arrows[i][0];
                let someArrowEnd = window.arrows[i][1];

                if(currentArrowCoordinateStart === someArrowStart && currentArrowCoordinateEnd === someArrowEnd){
                    window.arrows.splice(i, 1);
                }
            }

            drawBoardDiagram(window.divId, window.currentFen, window.circles, window.arrows)

        }
    }
    if(inputValue.indexOf("-") !== -1){
        window.arrows.push(inputValue.split("-"));
    }

    drawBoardDiagram(window.divId, window.currentFen, window.circles, window.arrows)
}