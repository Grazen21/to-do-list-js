function add() { 
    let node = document.createElement("LI");                
    node.addEventListener("click", removeList);
    let textnode = document.getElementById("list-item").value; 
    node.innerHTML = textnode;                              
    document.getElementById("unordered-list").appendChild(node); 
    document.getElementById("list-item").value= "";
}


function removeList(e) {
    let selected = e.target;
    selected.parentNode.removeChild(selected);
}


// trial and error
// for(i=0; document.getElementsByTagName("li").length<i; i++){
//     document.getElementsByTagName("li")[i].
// } 

let input =document.getElementById("list-item")
input.onkeydown=function(){
    if (document.getElementById("list-item").value.length < 3 ) {
        document.getElementById("addButton").disabled = true;
    }
    else{
        document.getElementById("addButton").disabled = false;
    }

}

//why backspace does not apply to the line of code above? Is back space a .onkey down event?