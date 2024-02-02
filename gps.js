function checkGPSCoordinates() {
  // document.getElementById("text1").value = "0893106177";
  // document.getElementById("text2_1").value = "28218";
  // document.getElementById("text2_2").value = "56342";
  // document.getElementById("text3").value = "178";

  var eingabe_Ort_1 = document.getElementById("text1").value;
  var eingabe_Ort_2_1 = document.getElementById("text2_1").value;
  var eingabe_Ort_2_2 = document.getElementById("text2_2").value;
  var eingabe_Ort_3 = document.getElementById("text3").value;

  var ort1 = checkOrt1(eingabe_Ort_1);
  var ort2_1 = checkOrt2_1(eingabe_Ort_2_1);
  var ort2_2 = checkOrt2_2(eingabe_Ort_2_2);
  var ort3 = checkOrt3(eingabe_Ort_3);

  // console.log(ort1);
  // console.log(ort2_1);
  // console.log(ort2_2);
  // console.log(ort3);
  // console.log("*****");

  if (ort1 === true && ort2_1 === true && ort2_2 === true && ort3 === true) {
    document.getElementById("coordinates-input-solution-false").style.display =
      "none";
    document.getElementById("coordinates-input-solution-right").style.display =
      "block";
  } else {
    document.getElementById("coordinates-input-solution-false").style.display =
      "block";
    document.getElementById("coordinates-input-solution-right").style.display =
      "none";
  }
}

function checkOrt1(wert) {
  if (wert === "0893106177") {
    return true;
  }
  document.getElementById("text1").style.borderColor = "red";
  return false;
}

function checkOrt2_1(wert) {
  if (wert >= 283090 && wert <= 283290) {
    return true;
  }
  document.getElementById("text2_1").style.borderColor = "red";
  return false;
}

function checkOrt2_2(wert) {
  if (wert >= 564343 && wert <= 564443) {
    return true;
  }
  document.getElementById("text2_2").style.borderColor = "red";
  return false;
}

function checkOrt3(wert) {
  if (wert === "178") {
    return true;
  }
  document.getElementById("text3").style.borderColor = "red";
  return false;
}
