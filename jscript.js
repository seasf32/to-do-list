const topic = document.querySelector(".topic")
const info = document.querySelector(".info")
const form = document.querySelector(".form")
const taskList = document.querySelector(".tasks")

form.addEventListener("submit",function(move){
    move.preventDefault()
    const task = document.createElement("div")
    task.classList.add("accordion-item")
    const id = taskList.childElementCount +1;
    task.innerHTML = `
     <h2 class="accordion-header task-title">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#task${id}" aria-expanded="false" aria-controls="flush-collapseOne">
                  ${topic.value}
                </button>
                <button type="button" class="btn btn-danger" id="delete">Удалить</button>
              </h2>
              <div id="task${id}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">${info.value}</div>
              </div>`;

              const deletebtn = task.querySelector("#delete")

              
              taskList.append(task);
              deletebtn.onclick = ()=>{
                task.remove()

              }
              topic.value = "";
    info.value = "";

})
