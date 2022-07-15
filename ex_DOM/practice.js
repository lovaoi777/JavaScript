document.querySelectorAll('.animal')[2].innerHTML = "dog" ; // 곰에서 -> 강아지로 내용 변경
const animals = document.getElementById("animals");

//동적으로 li태그에 Cat을 생성
animals.innerHTML += "<li class='aniaml'>Cat</li>";

document.querySelectorAll(".box")[0].classList.add("purple");


document.querySelectorAll(".box")[0].classList.remove("purple");

document.querySelectorAll(".box")[0].classList.toggle("yellow");
document.querySelectorAll(".box")[0].classList.toggle("yellow");

let num = 0;
document.getElementById("plus").addEventListener("click",function () {
    num++;
    document.getElementById("num").innerHTML = num;
});
document.getElementById("minus").addEventListener("click",function () {
    num--;
    document.getElementById("num").innerHTML = num;
});
document.querySelector('.bar').addEventListener('click',function() {
    document.querySelector('.bar').innerHTML = "눌렀어!!";
    //document.querySelector('.newbar').style.display="block";
    document.querySelector('.newbar').classList.toggle("show");
})