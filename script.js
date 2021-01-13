//selectors

var list = document.querySelector("#list");
var addBtn = document.querySelector("#addBtn");
var deleteBtn = document.querySelector(".deleteBtn");
var x=2;


// Event listeners

addBtn.addEventListener("click", addFile);
list.addEventListener("click", deleteFile);

function deleteFile(e){
  const item = e.target;
  console.log(item);

  if(item.classList[0] == 'deleteBtn'){
    var parent = item.parentElement;
    console.log(item);
    parent.remove();
  }

}
//functions
function addFile(){
  console.log('hello');

  //creating a container
  var listItem = document.createElement('div');
  listItem.classList.add('listItem');

  //creating the input tag 
  var inputTag = document.createElement('input');
  inputTag.type='file';
  inputTag.name = 'doc'+x;
  x++;
  listItem.appendChild(inputTag);
  

  //delete button
  var deleteButton = document.createElement('span');
  deleteButton.classList.add('deleteBtn');
  deleteButton.innerText = "Delete";
  listItem.appendChild(deleteButton);
 
  
  list.appendChild(listItem);
}

