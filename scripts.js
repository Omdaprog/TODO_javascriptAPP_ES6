var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener('submit', e => {
    console.log(1)
    e.preventDefault();

    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');

    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));


    // create delete button
    
    var deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode('X'));
    
    li.appendChild(deleteBtn);
    itemList.appendChild(li)
})

itemList.addEventListener('click' , e => {
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure ?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
})

filter.addEventListener('keyup', e =>{
    var text = e.target.value.toLowerCase();

    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach((item) =>{
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
})