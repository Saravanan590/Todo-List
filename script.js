document.getElementById("form").addEventListener('submit',Submit);
var ul=document.querySelector("ul");
document.querySelector("ul").addEventListener('click',Perform);
document.getElementById("clearAll").addEventListener('click',clear);
function clear()
{
   ul.innerHTML='';
}
function Submit(e)
{
    e.preventDefault();
    let input=document.getElementById("input");
    if(input.value.length>0)
    {
        addTodo(input.value);
    }
    input.value="";
}
function Perform(e)
{
    if(e.target.name=="checkbutton")
     strikeline(e);
     if(e.target.name=='dbutton')
     deletetodo(e);
}
function strikeline(e)
{
    let item=e.target.parentNode;
    if(item.style.textDecoration=='line-through')
    item.style.textDecoration='none';
    else
    item.style.textDecoration='line-through';
}
function deletetodo(e)
{
    let item=e.target.parentNode;
    item.addEventListener('transitionend',function(){
    item.remove();
    })
    item.classList.add('todo-fall');
}
function addTodo(x)
{
    let ul=document.getElementById("ul");
    let li=document.createElement("li");
    li.innerHTML=`<span class="todo-item">${x}</span>
    <button name="checkbutton"><i class="fas fa-check-square"></i></button>
    <button name="dbutton" id="deletebutton"><i class="fas fa-trash"></i></button>
    `;
    li.classList.add('todo-list-item');
    ul.appendChild(li);
}

