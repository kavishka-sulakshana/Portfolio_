bars = document.getElementById("bar");
bars.addEventListener("click",function () {
    a=document.getElementById("portf");
    b= document.getElementById("nav_toggle");
    b.classList.toggle("deactv");
    a.classList.toggle("deactv");

});

i=0;
let TypeW = document.getElementById("TypeW");
const x = ["Kavishka Sulakshana","a Software Developer","a video editor"];
let rand = 0;
text = x[rand];
count = 40;
var abc = text;
function typewriter2() {
    if(i<text.length){
        abc = abc.substr(1,abc.length);
        TypeW.innerHTML = abc;
        console.log("abc");
        i++;
        setTimeout(typewriter2, count);
    }else{
        i=0;
        rand = Math.floor((Math.random() * x.length));
        text = x[rand];
        abc = text;
        setTimeout(typeWriter,1000);
    }
}
function typeWriter() {
    if (i < text.length) {
      TypeW.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, count);
    }else{
        i=0;
        setTimeout(typewriter2,5000);
        // typewriter2();
    }
    
}


