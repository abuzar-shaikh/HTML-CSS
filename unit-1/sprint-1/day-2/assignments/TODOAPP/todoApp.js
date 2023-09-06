document.querySelector("form").addEventListener("submit", getdata);
function getdata(e) {
  e.preventDefault();
  var task = document.getElementById("task").value;
  var priority = document.getElementById("priority").value;
  console.log(task, priority);

  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  td1.innerText = task;

  var td2 = document.createElement("td");
  td2.innerText = priority;

if(priority==="Higer"){
    td2.style.backgroundColor="red"
}else{
    td2.style.backgroundColor="green"
}

  var td3 = document.createElement("td");
  td3.innerText = "DELETE";

  td3.addEventListener("click",DeleteTask)

  tr.append(td1, td2, td3);
  document.querySelector("tbody").append(tr);
}

function DeleteTask(){
    console.log(event.target.parentNode)
    event.target.parentNode.remove()
}