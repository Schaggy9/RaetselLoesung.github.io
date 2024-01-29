function checkLogical() {
  //   document.getElementById("text4").value = "30";
  //   document.getElementById("text5").value = "Mittelmeer";
  //   document.getElementById("text6").value = "Pazifik";
  //   document.getElementById("text7").value = "Schildkröte";
  //   document.getElementById("text8").value = "5";

  var eingabe4 = document.getElementById("text4").value;
  var eingabe5 = document.getElementById("text5").value;
  var eingabe6 = document.getElementById("text6").value;
  var eingabe7 = document.getElementById("text7").value;
  var eingabe8 = document.getElementById("text8").value;

  var antwort4 = checkAnswer4(eingabe4);
  var antwort5 = checkAnswer5(eingabe5);
  var antwort6 = checkAnswer6(eingabe6);
  var antwort7 = checkAnswer7(eingabe7);
  var antwort8 = checkAnswer8(eingabe8);

  //   console.log(antwort4);
  //   console.log(antwort5);
  //   console.log(antwort6);
  //   console.log(antwort7);
  //   console.log(antwort8);
  //   console.log("*****");

  if (
    antwort4 === true &&
    antwort5 === true &&
    antwort6 === true &&
    antwort7 === true &&
    antwort8 === true
  ) {
    document.getElementById("logical-input-solution-false").style.display =
      "none";
    document.getElementById("logical-input-solution-right").style.display =
      "block";
  } else {
    document.getElementById("logical-input-solution-false").style.display =
      "block";
    document.getElementById("logical-input-solution-right").style.display =
      "none";
  }
}

function checkAnswer4(wert) {
  if (wert === "30") {
    return true;
  }
  document.getElementById("text4").style.borderColor = "red";
  return false;
}

function checkAnswer5(wert) {
  if (wert === "Mittelmeer") {
    return true;
  }
  document.getElementById("text5").style.borderColor = "red";
  return false;
}

function checkAnswer6(wert) {
  if (wert === "Pazifik") {
    return true;
  }
  document.getElementById("text6").style.borderColor = "red";
  return false;
}

function checkAnswer7(wert) {
  if (wert === "Schildkröte") {
    return true;
  }
  document.getElementById("text7").style.borderColor = "red";
  return false;
}

function checkAnswer8(wert) {
  if (wert === "5") {
    return true;
  }
  document.getElementById("text8").style.borderColor = "red";
  return false;
}
