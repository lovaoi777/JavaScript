let inputBox = document.getElementById('inputField'); //할 일 입력창
let addToDo = document.getElementById('addTodo'); //버튼
let toDoList = document.getElementById('toDoList'); // 할 일 리스트창

addToDo.addEventListener('click', function(){ //버튼에 클리 이벤트가 발생하면 
    var list = document.createElement('li');  //HTMl 'li' 태그 만들기
    if(!inputBox.value)
        alert('내용을 입력해 주세요!');
    else{
        list.innerText = inputBox.value; // <li> 입력된 할 일 </li>
        toDoList.appendChild(list); //할 일 리스트창에 자식으로 붙이기
        inputBox.value = "" ; // 할 일 입력창 초기화
    }
    //만들어진 list에 클릭 이벤트가 발생하면 줄 긋기
    list.addEventListener('click', function(){
        list.style.textDecoration = "line-throught";
    }) 
    //list에 더블클릭 이벤트가 발생하면 할 일 리스트창에서 지우기
    list.addEventListener('dblclick', function(){
        toDoList.removeChild(list);
    }
    )
})