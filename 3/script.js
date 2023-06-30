let xo=["","","","","","","","",""];


function fill(){
    //------------------------------------1-----------------------------------------
    if(xo[0]=="x"){
        document.getElementById("xo1").innerHTML="x";
        document.getElementById("xo1").classList.add("x");
    }
    if(xo[0]=="o"){
        document.getElementById("xo1").innerHTML="o";
        document.getElementById("xo1").classList.add("o");
    }
    //------------------------------------2-----------------------------------------
    if(xo[1]=="x"){
        document.getElementById("xo2").innerHTML="x";
        document.getElementById("xo2").classList.add("x");
    }
    if(xo[1]=="o"){
        document.getElementById("xo2").innerHTML="o";
        document.getElementById("xo2").classList.add("o");
    }
    //------------------------------------3-----------------------------------------
    if(xo[2]=="x"){
        document.getElementById("xo3").innerHTML="x";
        document.getElementById("xo3").classList.add("x");
    }
    if(xo[2]=="o"){
        document.getElementById("xo3").innerHTML="o";
        document.getElementById("xo3").classList.add("o");
    }
    //------------------------------------4-----------------------------------------
    if(xo[3]=="x"){
        document.getElementById("xo4").innerHTML="x";
        document.getElementById("xo4").classList.add("x");
    }
    if(xo[3]=="o"){
        document.getElementById("xo4").innerHTML="o";
        document.getElementById("xo4").classList.add("o");
    }
    //------------------------------------5-----------------------------------------
    if(xo[4]=="x"){
        document.getElementById("xo5").innerHTML="x";
        document.getElementById("xo5").classList.add("x");
    }
    if(xo[4]=="o"){
        document.getElementById("xo5").innerHTML="o";
        document.getElementById("xo5").classList.add("o");
    }
    //------------------------------------6-----------------------------------------
    if(xo[5]=="x"){
        document.getElementById("xo6").innerHTML="x";
        document.getElementById("xo6").classList.add("x");
    }
    if(xo[5]=="o"){
        document.getElementById("xo6").innerHTML="o";
        document.getElementById("xo6").classList.add("o");
    }
    //------------------------------------7-----------------------------------------
    if(xo[6]=="x"){
        document.getElementById("xo7").innerHTML="x";
        document.getElementById("xo7").classList.add("x");
    }
    if(xo[6]=="o"){
        document.getElementById("xo7").innerHTML="o";
        document.getElementById("xo7").classList.add("o");
    }
    //------------------------------------8-----------------------------------------
    if(xo[7]=="x"){
        document.getElementById("xo8").innerHTML="x";
        document.getElementById("xo8").classList.add("x");
    }
    if(xo[7]=="o"){
        document.getElementById("xo8").innerHTML="o";
        document.getElementById("xo8").classList.add("o");
    }
    //------------------------------------9-----------------------------------------
    if(xo[8]=="x"){
        document.getElementById("xo9").innerHTML="x";
        document.getElementById("xo9").classList.add("x");
    }
    if(xo[8]=="o"){
        document.getElementById("xo9").innerHTML="o";
        document.getElementById("xo9").classList.add("o");
    }
};
function winner(){
    if ((xo[0]=="o") && (xo[1]=="o") && (xo[2]=="o")) return 1;
    if ((xo[3]=="o") && (xo[4]=="o") && (xo[5]=="o")) return 2;
    if ((xo[6]=="o") && (xo[7]=="o") && (xo[8]=="o")) return 3;
    if ((xo[0]=="o") && (xo[3]=="o") && (xo[6]=="o")) return 4;
    if ((xo[1]=="o") && (xo[4]=="o") && (xo[7]=="o")) return 5;
    if ((xo[2]=="o") && (xo[5]=="o") && (xo[8]=="o")) return 6;
    if ((xo[0]=="o") && (xo[4]=="o") && (xo[8]=="o")) return 7;
    if ((xo[2]=="o") && (xo[4]=="o") && (xo[6]=="o")) return 8;
    if ((xo[0]=="x") && (xo[1]=="x") && (xo[2]=="x")) return 1;
    if ((xo[3]=="x") && (xo[4]=="x") && (xo[5]=="x")) return 2;
    if ((xo[6]=="x") && (xo[7]=="x") && (xo[8]=="x")) return 3;
    if ((xo[0]=="x") && (xo[3]=="x") && (xo[6]=="x")) return 4;
    if ((xo[1]=="x") && (xo[4]=="x") && (xo[7]=="x")) return 5;
    if ((xo[2]=="x") && (xo[5]=="x") && (xo[8]=="x")) return 6;
    if ((xo[0]=="x") && (xo[4]=="x") && (xo[8]=="x")) return 7;
    if ((xo[2]=="x") && (xo[4]=="x") && (xo[6]=="x")) return 8;
    return 0;
}
function winnered(){
    if(winner()==1){
        document.getElementById("xo1").style.color="red";
        document.getElementById("xo2").style.color="red";
        document.getElementById("xo3").style.color="red";
    }
    if(winner()==2){
        document.getElementById("xo4").style.color="red";
        document.getElementById("xo5").style.color="red";
        document.getElementById("xo6").style.color="red";
    }
    if(winner()==3){
        document.getElementById("xo7").style.color="red";
        document.getElementById("xo8").style.color="red";
        document.getElementById("xo9").style.color="red";
    }
    if(winner()==4){
        document.getElementById("xo1").style.color="red";
        document.getElementById("xo4").style.color="red";
        document.getElementById("xo7").style.color="red";
    }
    if(winner()==5){
        document.getElementById("xo2").style.color="red";
        document.getElementById("xo5").style.color="red";
        document.getElementById("xo8").style.color="red";
    }
    if(winner()==6){
        document.getElementById("xo3").style.color="red";
        document.getElementById("xo6").style.color="red";
        document.getElementById("xo9").style.color="red";
    }
    if(winner()==7){
        document.getElementById("xo1").style.color="red";
        document.getElementById("xo5").style.color="red";
        document.getElementById("xo9").style.color="red";
    }
    if(winner()==8){
        document.getElementById("xo3").style.color="red";
        document.getElementById("xo5").style.color="red";
        document.getElementById("xo7").style.color="red";
    }
}
function full1(){
    let n=0;
    for(let i=0;i<9;i++){
        if(xo[i]=="x") n++;
        if(xo[i]=="o") n++;
    }
    if(n==9){
    document.getElementById("turn").innerHTML=" game over";
    document.getElementById("turn").style.color="#540054";
    document.getElementById("turn").style.background="#f2eb00";
    document.getElementById("btn").style.opacity="100%";
    }
    if(n==9) return 1;
    else return 2;
}
let turn1="x";
//document.getElementById("field").style.opacity="0%"
//-------------------------------------11--------------------------------------------
function xo11(){
    if((winner()==0)&&(full1()==2)){
        if(xo[0]!="") {
            alert("This field is full");
            if(turn1=="x") turn1="o";
            else turn1="x";
        }
        else if(turn1=="x") {
            xo[0]="x";
            document.getElementById("turn").innerHTML="o's turn";
            document.getElementById("turn").style.color="#f2ebd3";
            document.getElementById("turn").style.background="#545454";
            full1();
            if(winner()!=0){
                document.getElementById("turn").innerHTML="x won";
                document.getElementById("turn").style.color="#545454";
                document.getElementById("turn").style.background="#f2ebd3";
                winnered();
                document.getElementById("btn").style.opacity="100%";
            }
        }
        else{
            xo[0]="o";
            document.getElementById("turn").innerHTML="x's turn";
            document.getElementById("turn").style.color="#545454";
            document.getElementById("turn").style.background="#f2ebd3";
            full1();
            if(winner()!=0){
                document.getElementById("turn").innerHTML="o won";
                document.getElementById("turn").style.color="#545454";
                document.getElementById("turn").style.background="#f2ebd3";
                winnered();
                document.getElementById("btn").style.opacity="100%";
            }
        }
        fill();
        if(turn1=="x") turn1="o";
        else turn1="x";
    }
    else document.getElementById("field").style.opacity="100%";         
};
//-------------------------------------22--------------------------------------------
function xo22(){
    if((winner()==0)&&(full1()==2)){
        if(xo[1]!="") {
            alert("This field is full");
            if(turn1=="x") turn1="o";
            else turn1="x";
        }
        else if(turn1=="x") {
            xo[1]="x";
            document.getElementById("turn").innerHTML="o's turn";
            document.getElementById("turn").style.color="#f2ebd3";
            document.getElementById("turn").style.background="#545454";
            full1();
            if(winner()!=0){
                document.getElementById("turn").innerHTML="x won";
                document.getElementById("turn").style.color="#545454";
                document.getElementById("turn").style.background="#f2ebd3";
                winnered();
                document.getElementById("btn").style.opacity="100%";
            }
        }
        else{
            xo[1]="o";
            document.getElementById("turn").innerHTML="x's turn";
            document.getElementById("turn").style.color="#545454";
            document.getElementById("turn").style.background="#f2ebd3";
            full1();
            if(winner()!=0){
                document.getElementById("turn").innerHTML="o won";
                document.getElementById("turn").style.color="#545454";
                document.getElementById("turn").style.background="#f2ebd3";
                winnered();
                document.getElementById("btn").style.opacity="100%";
            }
        }
        fill();
        if(turn1=="x") turn1="o";
        else turn1="x";
    }
    else document.getElementById("field").style.opacity="100%";         
};
//-------------------------------------33--------------------------------------------
function xo33(){
    if((winner()==0)&&(full1()==2)){
        if(xo[2]!="") {
            alert("This field is full");
            if(turn1=="x") turn1="o";
            else turn1="x";
        }
        else if(turn1=="x") {
            xo[2]="x";
            document.getElementById("turn").innerHTML="o's turn";
            document.getElementById("turn").style.color="#f2ebd3";
            document.getElementById("turn").style.background="#545454";
            full1();
            if(winner()!=0){
                document.getElementById("turn").innerHTML="x won";
                document.getElementById("turn").style.color="#545454";
                document.getElementById("turn").style.background="#f2ebd3";
                winnered();
                document.getElementById("btn").style.opacity="100%";
            }
        }
        else{
            xo[2]="o";
            document.getElementById("turn").innerHTML="x's turn";
            document.getElementById("turn").style.color="#545454";
            document.getElementById("turn").style.background="#f2ebd3";
            full1();
            if(winner()!=0){
                document.getElementById("turn").innerHTML="o won";
                document.getElementById("turn").style.color="#545454";
                document.getElementById("turn").style.background="#f2ebd3";
                winnered();
                document.getElementById("btn").style.opacity="100%";
            }
        }
        fill();
        if(turn1=="x") turn1="o";
        else turn1="x";
    }
    else document.getElementById("field").style.opacity="100%";         
};
//-------------------------------------44--------------------------------------------
function xo44(){
    if((winner()==0)&&(full1()==2)){
        if(xo[3]!="") {
            alert("This field is full");
            if(turn1=="x") turn1="o";
            else turn1="x";
        }
        else if(turn1=="x") {
            xo[3]="x";
            document.getElementById("turn").innerHTML="o's turn";
            document.getElementById("turn").style.color="#f2ebd3";
            document.getElementById("turn").style.background="#545454";
            full1();
            if(winner()!=0){
                document.getElementById("turn").innerHTML="x won";
                document.getElementById("turn").style.color="#545454";
                document.getElementById("turn").style.background="#f2ebd3";
                winnered();
                document.getElementById("btn").style.opacity="100%";
            }
        }
        else{
            xo[3]="o";
            document.getElementById("turn").innerHTML="x's turn";
            document.getElementById("turn").style.color="#545454";
            document.getElementById("turn").style.background="#f2ebd3";
            full1();
            if(winner()!=0){
                document.getElementById("turn").innerHTML="o won";
                document.getElementById("turn").style.color="#545454";
                document.getElementById("turn").style.background="#f2ebd3";
                winnered();
                document.getElementById("btn").style.opacity="100%";
            }
        }
        fill();
        if(turn1=="x") turn1="o";
        else turn1="x";
    }
    else document.getElementById("field").style.opacity="100%";         
};
//-------------------------------------55--------------------------------------------
function xo55(){
    if((winner()==0)&&(full1()==2)){
        if(xo[4]!="") {
            alert("This field is full");
            if(turn1=="x") turn1="o";
            else turn1="x";
        }
        else if(turn1=="x") {
            xo[4]="x";
            document.getElementById("turn").innerHTML="o's turn";
            document.getElementById("turn").style.color="#f2ebd3";
            document.getElementById("turn").style.background="#545454";
            full1();
            if(winner()!=0){
                document.getElementById("turn").innerHTML="x won";
                document.getElementById("turn").style.color="#545454";
                document.getElementById("turn").style.background="#f2ebd3";
                winnered();
                document.getElementById("btn").style.opacity="100%";
            }
        }
        else{
            xo[4]="o";
            document.getElementById("turn").innerHTML="x's turn";
            document.getElementById("turn").style.color="#545454";
            document.getElementById("turn").style.background="#f2ebd3";
            full1();
            if(winner()!=0){
                document.getElementById("turn").innerHTML="o won";
                document.getElementById("turn").style.color="#545454";
                document.getElementById("turn").style.background="#f2ebd3";
                winnered();
                document.getElementById("btn").style.opacity="100%";
            }
        }
        fill();
        if(turn1=="x") turn1="o";
        else turn1="x";
    }
    else document.getElementById("field").style.opacity="100%";         
};
//-------------------------------------66--------------------------------------------
function xo66(){
    if((winner()==0)&&(full1()==2)){
        if(xo[5]!="") {
            alert("This field is full");
            if(turn1=="x") turn1="o";
            else turn1="x";
        }
        else if(turn1=="x") {
            xo[5]="x";
            document.getElementById("turn").innerHTML="o's turn";
            document.getElementById("turn").style.color="#f2ebd3";
            document.getElementById("turn").style.background="#545454";
            full1();
            if(winner()!=0){
                document.getElementById("turn").innerHTML="x won";
                document.getElementById("turn").style.color="#545454";
                document.getElementById("turn").style.background="#f2ebd3";
                winnered();
                document.getElementById("btn").style.opacity="100%";
            }
        }
        else{
            xo[5]="o";
            document.getElementById("turn").innerHTML="x's turn";
            document.getElementById("turn").style.color="#545454";
            document.getElementById("turn").style.background="#f2ebd3";
            full1();
            if(winner()!=0){
                document.getElementById("turn").innerHTML="o won";
                document.getElementById("turn").style.color="#545454";
                document.getElementById("turn").style.background="#f2ebd3";
                winnered();
                document.getElementById("btn").style.opacity="100%";
            }
        }
        fill();
        if(turn1=="x") turn1="o";
        else turn1="x";
    }
    else document.getElementById("field").style.opacity="100%";     
};
//-------------------------------------77--------------------------------------------
function xo77(){
    if((winner()==0)&&(full1()==2)){
        if(xo[6]!="") {
            alert("This field is full");
            if(turn1=="x") turn1="o";
            else turn1="x";
        }
        else if(turn1=="x") {
            xo[6]="x";
            document.getElementById("turn").innerHTML="o's turn";
            document.getElementById("turn").style.color="#f2ebd3";
            document.getElementById("turn").style.background="#545454";
            full1();
            if(winner()!=0){
                document.getElementById("turn").innerHTML="x won";
                document.getElementById("turn").style.color="#545454";
                document.getElementById("turn").style.background="#f2ebd3";
                winnered();
                document.getElementById("btn").style.opacity="100%";
            }
        }
        else{
            xo[6]="o";
            document.getElementById("turn").innerHTML="x's turn";
            document.getElementById("turn").style.color="#545454";
            document.getElementById("turn").style.background="#f2ebd3";
            full1();
            if(winner()!=0){
                document.getElementById("turn").innerHTML="o won";
                document.getElementById("turn").style.color="#545454";
                document.getElementById("turn").style.background="#f2ebd3";
                winnered();
                document.getElementById("btn").style.opacity="100%";
            }
        }
        fill();
        if(turn1=="x") turn1="o";
        else turn1="x";
    }
    else document.getElementById("field").style.opacity="100%";         
};
//-------------------------------------88--------------------------------------------
function xo88(){
    if((winner()==0)&&(full1()==2)){
        if(xo[7]!="") {
            alert("This field is full");
            if(turn1=="x") turn1="o";
            else turn1="x";
        }
        else if(turn1=="x") {
            xo[7]="x";
            document.getElementById("turn").innerHTML="o's turn";
            document.getElementById("turn").style.color="#f2ebd3";
            document.getElementById("turn").style.background="#545454";
            full1();
            if(winner()!=0){
                document.getElementById("turn").innerHTML="x won";
                document.getElementById("turn").style.color="#545454";
                document.getElementById("turn").style.background="#f2ebd3";
                winnered();
                document.getElementById("btn").style.opacity="100%";
            }
        }
        else{
            xo[7]="o";
            document.getElementById("turn").innerHTML="x's turn";
            document.getElementById("turn").style.color="#545454";
            document.getElementById("turn").style.background="#f2ebd3";
            full1();
            if(winner()!=0){
                document.getElementById("turn").innerHTML="o won";
                document.getElementById("turn").style.color="#545454";
                document.getElementById("turn").style.background="#f2ebd3";
                winnered();
                document.getElementById("btn").style.opacity="100%";
            }
        }
        fill();
        if(turn1=="x") turn1="o";
        else turn1="x";
    }
    else document.getElementById("field").style.opacity="100%";          
};
//-------------------------------------99--------------------------------------------
function xo99(){
    if((winner()==0)&&(full1()==2)){
        if(xo[8]!="") {
            alert("This field is full");
            if(turn1=="x") turn1="o";
            else turn1="x";
        }
        else if(turn1=="x") {
            xo[8]="x";
            document.getElementById("turn").innerHTML="o's turn";
            document.getElementById("turn").style.color="#f2ebd3";
            document.getElementById("turn").style.background="#545454";
            full1();
            if(winner()!=0){
                document.getElementById("turn").innerHTML="x won";
                document.getElementById("turn").style.color="#545454";
                document.getElementById("turn").style.background="#f2ebd3";
                winnered();
                document.getElementById("btn").style.opacity="100%";
            }
        }
        else{
            xo[8]="o";
            document.getElementById("turn").innerHTML="x's turn";
            document.getElementById("turn").style.color="#545454";
            document.getElementById("turn").style.background="#f2ebd3";
            full1();
            if(winner()!=0){
                document.getElementById("turn").innerHTML="o won";
                document.getElementById("turn").style.color="#545454";
                document.getElementById("turn").style.background="#f2ebd3";
                winnered();
                document.getElementById("btn").style.opacity="100%";
            }
        }
        fill();
        if(turn1=="x") turn1="o";
        else turn1="x";
    }
    else document.getElementById("field").style.opacity="100%";       
};
