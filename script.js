
function AC(){
  document.getElementById("resultado").innerHTML ="0";
}

function removeZero(){
  let value = document.getElementById("resultado").innerHTML;
  if (value == "0"){
      value = ""
      document.getElementById("resultado").innerHTML = value;
  }
}

function DEL(){
  let value = document.getElementById("resultado").innerHTML;
  console.log(value);
  document.getElementById("resultado").innerHTML = value.slice(0, value.length -1);
}

function perc(){
  let value = document.getElementById("resultado").innerHTML;
  value = value / 100;
  document.getElementById("resultado").innerHTML = value;
}

function fordisplay(value){
  removeZero()
  document.getElementById("resultado").innerHTML += value;
}

function resolve(){
  removeZero()
  let equiation = document.getElementById("resultado").innerHTML;
  let solved = eval(equiation);
  document.getElementById("resultado").innerHTML = solved;
}