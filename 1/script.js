function one(){
  document.getElementById("text").value=document.getElementById("text").value+"1";
};

function two(){
document.getElementById("text").value=document.getElementById("text").value+"2";
};

function three(){
document.getElementById("text").value=document.getElementById("text").value+"3";
};

function four(){
document.getElementById("text").value=document.getElementById("text").value+"4";
};

function five(){
document.getElementById("text").value=document.getElementById("text").value+"5";
};

function six(){
document.getElementById("text").value=document.getElementById("text").value+"6";
};

function seven(){
document.getElementById("text").value=document.getElementById("text").value+"7";
};

function eight(){
document.getElementById("text").value=document.getElementById("text").value+"8";
};

function nine(){
document.getElementById("text").value=document.getElementById("text").value+"9";
};

function zero(){
document.getElementById("text").value=document.getElementById("text").value+"0";
};

function clear1(){
document.getElementById("text").value="";
};

function add1(){
let x=document.getElementById("text").value,y=x.split("+");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])+Number(y[1]));
}
y=x.split("-");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])-Number(y[1]));
}
y=x.split("×");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])*Number(y[1]));
}
y=x.split("÷");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])/Number(y[1]));
}
else
document.getElementById("text").value=document.getElementById("text").value+"+";
};

function add2(){
let x=document.getElementById("text").value,y=x.split("+");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])+Number(y[1]));
}
y=x.split("-");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])-Number(y[1]));
}
y=x.split("×");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])*Number(y[1]));
}
y=x.split("÷");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])/Number(y[1]));
}
else
document.getElementById("text").value=document.getElementById("text").value+"-";
};

function add3(){
let x=document.getElementById("text").value,y=x.split("+");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])+Number(y[1]));
}
y=x.split("-");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])-Number(y[1]));
}
y=x.split("×");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])*Number(y[1]));
}
y=x.split("÷");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])/Number(y[1]));
}
else
document.getElementById("text").value=document.getElementById("text").value+"×";
};

function add4(){
let x=document.getElementById("text").value,y=x.split("+");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])+Number(y[1]));
}
y=x.split("-");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])-Number(y[1]));
}
y=x.split("×");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])*Number(y[1]));
}
y=x.split("÷");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])/Number(y[1]));
}
else
document.getElementById("text").value=document.getElementById("text").value+"÷";
};
function add5(){
document.getElementById("text").value=document.getElementById("text").value+".";
};

function delete1(){
let amhouch=document.getElementById("text").value;
let rachid=amhouch.length -1;
document.getElementById("text").value=amhouch.substring(0,rachid);
};

function egal(){
  let x=document.getElementById("text").value,y=x.split("+");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])+Number(y[1]));
}
y=x.split("-");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])-Number(y[1]));
}
y=x.split("×");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])*Number(y[1]));
}
y=x.split("÷");
if(y.length==2){
  document.getElementById("text").value=(Number(y[0])/Number(y[1]));
}
};