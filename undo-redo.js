const tag = document.querySelector("#myTextarea");
const undoBtn = document.querySelector("#undo");
const redoBtn = document.querySelector("#redo");

let myObject = new Object();
myObject.i = 0; //count number of clicks inside textarea and redo clicks
myObject.j = 0; //count number of undo clicks
let store_text = new Array(); //where are stored textarea insatances
store_text[0] = "";

tag.addEventListener("keydown", () => {
    undoBtn.disabled = false;
    redoBtn.disabled = false;
    myObject.i++;
    store_text[myObject.i] = tag.value; //every keydown or redo, array grow from actual instance
});

undoBtn.addEventListener("mousedown", () => {
    redoBtn.disabled = false;
    if ((myObject.j) < (myObject.i)) {
        myObject.j++;
    } else {
        undoBtn.disabled = true;
    }
    let z = store_text.length;
    z -= myObject.j;
    if (store_text[z]) {
        tag.value = store_text[z];
    } else {
        tag.value = store_text[0];
    }
});

redoBtn.addEventListener("mousedown", () => {
    undoBtn.disabled = false;
    if ((myObject.j) > 1) {
        myObject.j--;
    } else {
        redoBtn.disabled = true;
    }
    let z = store_text.length;
    z -= myObject.j;
    if (store_text[z]) {
        tag.value = store_text[z];
    } else {
        tag.value = store_text[0];
    }
});