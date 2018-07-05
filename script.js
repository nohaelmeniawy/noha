document.getElementById("add").onclick = function() {
    
    var text = document.getElementById("item").value; //.value gets input values

    
    var li = document.createElement("li");
    
    li.setAttribute('id',text);
    li.appendChild(document.createTextNode(text));
    document.getElementById("list").appendChild(li);
}

function searchItem(event){
    var fi = event.target.value.toLowerCase();
    var it = document.getElementsByTagName('li');
    for(var i=0; i<it.length;i++){
        var name = it[i].textContent;
        if (name.toLowerCase().indexOf(fi) !== -1)
            it[i].style.display = 'list-item';
        else
            it[i].style.display = 'none';
    }
}

var search = document.getElementById('search');
search.addEventListener('input',searchItem);

