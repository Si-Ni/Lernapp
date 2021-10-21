const eingabeForm = document.getElementById("neuerEintragForm");
const input1 = document.getElementById("eingabe1");
const input2 = document.getElementById("eingabe2");
var item;
var id = 0;
var zaehler = 1;

eingabeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(input1.value){
        add({vokabel1: input1.value, vokabel2: input2.value, id: id});
        zaehler = 1;
    } else if (document.getElementById("changeForm")) {
        addRechts({vokabel2: input2.value, id: id-zaehler});
        zaehler++;
    }
    id++;
    input1.value = "";
    input2.value = "";
    input1.focus();
})

function add (data) {
    item = document.createElement("li");
    item.innerHTML =    `<form id="changeForm">
                        <textarea class="ersteVokabel" spellcheck="false">${data.vokabel1}</textarea>
                        <button id="${data.id}" type="button" class="buttonDR" onClick="reply_clickButton(this.id)">D</button>
                        <textarea class='zweiteVokabel' spellcheck="false">${data.vokabel2}</textarea>
                        </form>`;
    item.className = data.id + "d";
    ausgabe.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
}

function addRechts (data) {
    console.log(data.id)
    item = document.createElement("form");
    item.id = "changeForm";
    item.innerHTML =    `<div class="fillDiv"></div>
                        <button id="${data.id + " " + zaehler}" type="button" class="buttonD" onClick="reply_clickButton2(this.id)">D</button>
                        <textarea class='zweiteVokabel' spellcheck="false">${data.vokabel2}</textarea>`;
    let item2 = document.getElementsByClassName(data.id+"d")[0];
    item.className = data.id + " " + zaehler + "form";
    item2.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
}

function reply_clickButton(clicked_id){
    item = document.getElementsByClassName(clicked_id+"d")[0];
    item.remove();
}

function reply_clickButton2(clicked_id){
    item = document.getElementsByClassName(clicked_id+"form")[0];
    item.remove();
}

function linksVerdecken() {
    let all = document.getElementsByClassName('ersteVokabel');
        for (let i = 0; i < all.length; i++) {
            all[i].style.setProperty("--main-color", "transparent");
        }
    all = document.getElementsByClassName('zweiteVokabel');
        for (let i = 0; i < all.length; i++) {
            all[i].style.setProperty("--main-color", "black");
        }
}

function rechtsVerdecken() {
    let all = document.getElementsByClassName('zweiteVokabel');
        for (let i = 0; i < all.length; i++) {
            all[i].style.setProperty("--main-color", "transparent");
        }
    all = document.getElementsByClassName('ersteVokabel');
        for (let i = 0; i < all.length; i++) {
            all[i].style.setProperty("--main-color", "black");
        }
}

function anzeigen() {
    let all = document.getElementsByClassName('ersteVokabel');
        for (let i = 0; i < all.length; i++) {
            all[i].style.setProperty("--main-color", "black");
        }
    all = document.getElementsByClassName('zweiteVokabel');
        for (let i = 0; i < all.length; i++) {
            all[i].style.setProperty("--main-color", "black");
        }
}

