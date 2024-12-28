function showList(listNumber){
  const list = document.getElementById(`list${listNumber}`);
  list.style.display = "block";
}

function hideList(listNumber){
  const list = document.getElementById(`list${listNumber}`);
  list.style.display = "none";
}