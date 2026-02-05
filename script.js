let age= 19;
let toms;
if(age<7){
    toms = "anvcar e tomsy";
}
else if(age>=7 && age<=18){
    toms = "zexchvum e 50%";
}
else if(age>=18){
    toms = "zexchvum e 30%";
}
else{
    toms = "amboxjakan gin";
}
document.getElementById("toms").innerHTML=age + " " + toms ;



let tiv = -5;
let text;
if(tiv>0){
    text = "tivy drakan e";
}
else if(tiv=0){
    text = " tivy havasar e 0";
}
else{
    text = "tivy bacasakan e";
}
document.getElementById("tiv").innerHTML=tiv + " " + text;



let hour = new Date() .getHours();
let  day;
if(hour>=5 && hour<=11){
    day = "bari luys";
}
else if(hour>=12 && hour<=17){
    day = "bari or";
}
else if(hour>=18 && hour<=22){
     day = "bari ereko";
}
else{
    day = "bari gisher ";
}
document.getElementById("hour").innerHTML=hour + " " + day;


let month = 4;
let text1;
switch(month) {
    case 1:
    case 3:
     case 5:
     case 7:
     case 8:     
     case 10:
      case 12:      
        text1 = "uni 31or";
    break;
    case 4:
    case 6:
     case 9:
      case 11:
        text1 = "uni 30or";
     break;
     case 2:
        text1 = "uni 28 kam 29 or";
        break;            
}
document.getElementById("days").innerHTML=month + " " + text1;


let kod = 2;
let anun;
switch(kod){
    case 1:
       anun = "pizza 2500 dram";
       break;
     case 2:
        anun = "burger 1800 dram";
        break;
      case 3:
        anun ="axcan 1200 dram";
        break;
        case 4:
            anun ="surc 500 dram";
            break;          
}
document.getElementById("kod").innerHTML=kod + " " + anun;


let tar = "B";
let gnahatakan;
switch(tar){
    case "A":
        gnahatakan = "gerazanc";
        break;
     case  "B":
        gnahatakan = "lav";
        break;
      case "C":
        gnahatakan = "bavarar";
        break;
     case "D":
        gnahatakan = "vat";
        break;
     case "F":
        gnahatakan="anbavarar";
        break;        
}
document.getElementById("tar").innerHTML=tar + " " + gnahatakan;



// let color = prompt("my favorit color`black");
// if(color === "black"){
//     console.log("true");
// }
// else {
//     console.log("false");
// }


// let date = prompt("my birthday is 16.06.2006");
// let patasxan;
// if(date === "16.06.2006"){
//      alert("true");
// }
// else{
//     alert("false");
// }

let number = " ";
for(let tiv=5;tiv<9;tiv++ ){
    number += "hamarn e" + tiv + "<br>";
}
document.getElementById("number").innerHTML=number;



let name1 = ["Gohar","Astxik","Arevik"];
let anunner ="";
for(let tiv1=0;tiv1<name1.length;tiv1++){
    anunner += name1[tiv1] + "<br>";
}
document.getElementById("name1").innerHTML=anunner;


let number1 = " ";
for(let number2=1;number2<20;number2++){
    number1 += "tiv" + number2 + "<br>";
}
document.getElementById("number1").innerHTML=number1;


let number3 = " ";
for(let number4 = 10;number4>1;number4--){
    number3 +="tiv" + number4 + "<br>";
}
document.getElementById("number3").innerHTML=number3;



const password = "secret123";
let text2 = " ";
while(password !="secret123"){
    text2 = "gaxtnabary sxal e";
}
