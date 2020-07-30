//Define initial states of tags
let selected = ["all"];
let buttonStates = [true, false, false, false, false, false, false];

//Find necessary html elements

//List elements
const all = document.querySelector(".tags > .all");
const software = document.querySelector(".tags > .software");
const hardware = document.querySelector(".tags > .hardware");
const design = document.querySelector(".tags > .design");
const front_end = document.querySelector(".tags > .front_end");
const algorithms = document.querySelector(".tags > .algorithms");
const machine_learning = document.querySelector(".tags > .machine_learning");

//Project cards

//Setup onclick events for tags
all.onclick = function() {
    if (buttonStates[0]) {
        removeTag("all", 0, all);
    } else {
        addTag("all", 0, all);
    }
    evaluate();
}

software.onclick = function() {
    if (buttonStates[1]) {
        removeTag("software", 1, software);
    } else {
        addTag("software", 1, software);
    }
}

hardware.onclick = function() {
    if (buttonStates[2]) {
        removeTag("hardware", 2, hardware);
    } else {
        addTag("hardware", 2, hardware);
    }
}

design.onclick = function() {
    if (buttonStates[3]) {
        removeTag("design", 3, design);
    } else {
        addTag("design", 3, design);
    }
}

front_end.onclick = function() {
    if (buttonStates[4]) {
        removeTag("front_end", 4, front_end);
    } else {
        addTag("front_end", 4, front_end);
    }
}

algorithms.onclick = function() {
    if (buttonStates[5]) {
        removeTag("algorithms", 5, algorithms);
    } else {
        addTag("algorithms", 5, algorithms);
    }
}

machine_learning.onclick = function() {
    if (buttonStates[6]) {
        removeTag("machine_learning", 6, machine_learning);
    } else {
        addTag("machine_learning", 6, machine_learning);
    }
}

//Removes tag
function removeTag(tag, bIndex, element) {
    if (!selected.includes(tag)) {
        return;
    }
    element.style.opacity = ".4";
    selected.splice(selected.indexOf("all"), 1);
    buttonStates[bIndex] = false;
    console.log(buttonStates);
    console.log(selected);
}

//Adds tag
function addTag(tag, bIndex, element) {
    //check if tag is already included
    /*
    if (selected.includes(tag)) {
        return;
    }
    //check if all is in selected: remove if it is
    if (selected.includes("all")) {
        selected.splice(selected.indexOf("all"), 1);
    }
    */
    //check if tag to add is all: if it is, clear tags except for all
    if (tag === "all") {
        selected = ["all"];
        all.style.opacity = ".4";
        software.style.opacity = ".4";
        hardware.style.opacity = ".4";
        design.style.opacity = ".4";
        front_end.style.opacity = ".4";
        algorithms.style.opacity = ".4";
        machine_learning.style.opacity = ".4";
        buttonStates = [true, false, false, false, false, false, false];
    }
    //add tag
    element.style.opacity = "1";
    selected.push(tag);
    buttonStates[bIndex] = true;
    console.log(buttonStates);
    console.log(selected);
}

//Changes opacity as needed
function evaluate() {

}