// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

//Functions that calculate input and give answers
function perAnswer() {
    let x = document.getElementById("PVS").value;
    let y = document.getElementById("PHS").value;
    a = 2*x + 2*y
    document.getElementById("AnswerPeri").innerHTML = "Answer:" + a;
}

function aAnswer() {
    let z = document.getElementById("AVS").value;
    let v = document.getElementById("AHS").value;
    b = z*v
    document.getElementById("AnswerArea").innerHTML = "Answer:" + b;
}