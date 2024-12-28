document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const btn = document.getElementById("btn");
  const lists = document.getElementById("lists");
  let task=[];

  btn.addEventListener("click",()=>{
    const textInput= input.value.trim();

    if(textInput === "")
      return;

    task.push({
      text:textInput,
      id: Date.now()
    })

    showAndDelete(task[task.length - 1]); //sending the last object from the task array
    input.value=""
  })

  function showAndDelete({text,id}){
    const li= document.createElement("li")
    const deleteBtn= document.createElement("button")
    li.innerHTML=text;
    li.setAttribute("id",id)
    deleteBtn.innerHTML="Delete";
    li.appendChild(deleteBtn)
    lists.appendChild(li)

    deleteBtn.addEventListener("click",()=>{
      task=task.filter((taskItem)=> taskItem.id !== id)
      li.remove()
    })
  }

});
