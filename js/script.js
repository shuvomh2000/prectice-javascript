let btn = document.querySelector(".btn");
let num = document.querySelector(".num");
let err = document.querySelector(".err");

btn.addEventListener("click", function () {
    if(num.value==""){
        alert("please inter a number");
    }
    else{
        for(i=1;i<=10;i++){
            document.write(num.value+" x "+i+" = "+ num.value*i + '<br>');
        }
    }
})










