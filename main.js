const startButton = document.getElementById("nameSubmit");
const nameInput = document.getElementById("nameInput");
const nameLabel = document.getElementById("nameLabel");
const firstFigure = document.getElementById("first-figure");
const secondFigure = document.getElementById("second-figure");
const operator = document.getElementById("operator");
const equalSign = document.getElementById("equal-sign");
const nextExerciseButton = document.getElementById("nextExercise");
const answerInput = document.getElementById("answerInput");
const main = document.getElementById("main");
const scoreLabel = document.getElementById("scoreLabel");
const scoreLabel2 = document.getElementById("scoreLabel2");
const scoreScore = document.getElementById("scoreScore");
const scoreMax = document.getElementById("scoreMax");

const point20 = document.getElementById("point20");
const point19 = document.getElementById("point19");
const point18 = document.getElementById("point18");
const point17 = document.getElementById("point17");
const point16 = document.getElementById("point16");
const point15 = document.getElementById("point15");
const point14 = document.getElementById("point14");
const point13 = document.getElementById("point13");
const point12 = document.getElementById("point12");
const point11 = document.getElementById("point11");
const point10 = document.getElementById("point10");
const point9 = document.getElementById("point9");
const point8 = document.getElementById("point8");
const point7 = document.getElementById("point7");
const point6 = document.getElementById("point6");
const point5 = document.getElementById("point5");
const point4 = document.getElementById("point4");
const point3 = document.getElementById("point3");
const point2 = document.getElementById("point2");
const point1 = document.getElementById("point1");

pointsIndicator = [];

pointsIndicator.push(point20);
pointsIndicator.push(point19);
pointsIndicator.push(point18);
pointsIndicator.push(point17);
pointsIndicator.push(point16);
pointsIndicator.push(point15);
pointsIndicator.push(point14);
pointsIndicator.push(point13);
pointsIndicator.push(point12);
pointsIndicator.push(point11);
pointsIndicator.push(point10);
pointsIndicator.push(point9);
pointsIndicator.push(point8);
pointsIndicator.push(point7);
pointsIndicator.push(point6);
pointsIndicator.push(point5);
pointsIndicator.push(point4);
pointsIndicator.push(point3);
pointsIndicator.push(point2);
pointsIndicator.push(point1);

let username = "";
let current = 0;
let answer = 0;
let scoreCount = 0;
let scoreMaximum = 0;
let reset = false;

const exerciseFactory = () => {
    let operator = Math.floor(Math.random()*2)
    let first = 0;
    let second = Math.floor(Math.random()*8)+2;
    if (operator === 1) {
        first = Math.floor(Math.random()*8)+2
    } else {
        first = second * (Math.floor(Math.random()*8)+2);
    }
    const exercise = {
        exOperator: operator,
        exFirst: first,
        exSecond: second
    }
    return exercise;
}

const createDatabase = () => {
    database = [];
    for (i=0; i<20; i++) {
        database[i] = exerciseFactory ();
    }
}

createDatabase();
console.log(database);

const printExercise = (exercise) => {
    firstFigure.innerHTML = exercise.exFirst;
    if (exercise.exOperator === 1) {
        operator.innerHTML = "x";
    } else {
        operator.innerHTML = ":";
    }
    secondFigure.innerHTML = exercise.exSecond;
    equalSign.innerHTML = "=";
}

function start(event) {
    nameInput.hidden = true;
    startButton.hidden = true;
    nameLabel.hidden = true;
    username = nameInput.value;
    main.style.display = "flex";
    scoreLabel.innerHTML = `Score ${username}:`;
    scoreLabel2.innerHTML = "op";
    printExercise(database[0]);
}

const checkresult = (exercise,answer) => {
    let correct = 0;
    if (exercise.exOperator === 1) {
        correct = exercise.exFirst * exercise.exSecond;
    } else {
        correct = exercise.exFirst / exercise.exSecond; 
    }
    if (correct == answer) {
        return true;
    } else {
        return false;
    }
}

function initiate() {
    main.style.display = "none";
    nameInput.hidden = false;
    startButton.hidden = false;
    nameLabel.hidden = false;
    username = "";
    current = 0;
    answer = 0;
    scoreCount = 0;
    scoreMaximum = 0;
    scoreScore.value = "";
    scoreMax.value = "";
    reset = false;
    nextExerciseButton.value = "Volgende";
    for (i=0; i<20; i++) {
        pointsIndicator[i].style.backgroundColor = "antiquewhite";
    }
}

function nextExercise(event) {
    if (reset) {
        initiate();
    } else {
        answer = answerInput.value;
        answerInput.value = "";
        if (checkresult(database[current],answer)) {
            pointsIndicator[current].style.backgroundColor = "green";
            scoreCount = scoreCount + 1
        }
        else {
            pointsIndicator[current].style.backgroundColor = "red";
        }
        scoreMaximum = scoreMaximum + 1;
        current = current + 1;
        scoreScore.value = scoreCount;
        scoreMax.value = scoreMaximum;
        if (current < 20) {
            printExercise(database[current])
        } else {
            nextExerciseButton.value = "Opnieuw"
            reset = true;
        }
    }
}

startButton.addEventListener("click", start);
nextExerciseButton.addEventListener("click", nextExercise);
initiate();

