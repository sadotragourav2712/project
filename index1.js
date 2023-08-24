// alert("hello")
const item=document.body.querySelector("#item")


const todobox=document.body.querySelector("#to-do-box")
item.addEventListener(
    "keyup",
    function(event){
        if(event.key=="Enter"){
            addToDo(this.value);
            this.value="";
        }
    }
    )

const addToDo=(item)=>{
    let li=document.createElement("li");
    li.innerHTML=`
    ${item}
    <i class="fas fa-times"></i>
    `;
    li.addEventListener(
        "click",function(){
            this.classList.toggle("done");
        }
    )
    li.querySelector("i").addEventListener(

        "click",function(){
            li.remove();
        }
    )
    todobox.appendChild(li);
}