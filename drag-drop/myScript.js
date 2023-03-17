var temp = null;
var icerik = document.getElementsByClassName("content");
for (icerik of content) {
    icerik.ondrop = function() {
        this.append(e);
    }
}


function insertItem() {
    var txt1 = document.getElementById("input1").value;
    var txt2 = document.getElementById("input2").value;
    var txt3 = document.getElementById("input3").value;
    if (txt1 === '' || txt2 === '' || txt3 === '') {
        alert("Lütfen Boş Bırakmayınız..!");
        return;
    }
    var item = document.createElement("div");
    var text1 = document.createElement("div");
    var text2 = document.createElement("div");
    var text3 = document.createElement("div");
    item.className = "item";
    text1.className = "text1";
    text2.className = "text2";
    text3.className = "text3";
    var input1 = document.createTextNode(txt1);
    var input2 = document.createTextNode(txt2);
    var input3 = document.createTextNode(txt3);
    text1.appendChild(input1);
    text2.appendChild(input2);
    text3.appendChild(input3);
    item.appendChild(text1);
    item.appendChild(text3);
    item.appendChild(text2);
    item.draggable = "true";
    item.ondragstart = function() {
        document.getElementById("clearItem").style.display = "flex";
        setTimeout(() => this.style.opacity = 0, 0);
        temp = this;
    }
    item.ondragend = function() {
        document.getElementById("clearItem").style.display = "none";
        setTimeout(() => this.style.opacity = 1, 0);
        temp = null;
    }
    var bekleyen = document.getElementById("bekleyen");
    bekleyen.appendChild(item);
    clearContent();
}

function clearAllItem() {
    var eleman = document.getElementsByClassName("content");
    for (el of eleman) {
        el.textContent = '';
    }
    clearContent();
}

function clearContent() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
}

function deleteItem() {
    temp.parentNode.removeChild(temp);
}

function dragOver(e) {
    e.preventDefault();
}



//drag and drop
/*
function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}
*/