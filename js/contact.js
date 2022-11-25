
var selectedRow = null;

async function addContact(){
    var _data ={
        Number : parseInt(document.getElementById("number").value),
        Name : document.getElementById("name").value,
        Email : document.getElementById("email").value,
        Comment : document.getElementById("comment").value,

    }
    var num = _data.Number;
    if (isNaN(num)) {
        alert("phone number cannot be empty")
        return
    }
    console.log(num)

    fetch('/contact/add', {
        method: "POST",
        body: JSON.stringify(_data),
        headers: {"Content-type": "application/json; charset=UTF=8"}
    })
    .then(() => {
        fetch('/registration/get/'+num)
        .then(response => response.text())
        .then(data => getContact(data))
    });
    resetForm();
}

async function getContact(data) {
    
    const contact = JSON.parse(data)
    var table = document.getElementById("Table");

    var row = table.insertRow(table.length);

    var td=[]
    for(i=0; i<table.rows[0].cells.length; i++){
        td[i] = row.insertCell(i)
    }

    td[0].innerHTML = contact.Number;
    td[1].innerHTML = contact.Name;
    td[2].innerHTML = contact.Email;
    td[3].innerHTML = contact.Comment;
    td[4].innerHTML = '<input type="button" onclick="deleteContact(this)" value="delete" id="button-1">';
    

}

function resetForm() {
    document.getElementById("number").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
}

async function getContacts(data) {
    const contacts = JSON.parse(data)
    console.log(contacts)
    contacts.forEach(feed => {
        var table = document.getElementById("Table");
        var row = table.insertRow();
        var td=[]
        for(i=0; i<table.rows[0].cells.length; i++){
            td[i] = row.insertCell(i);
        }
         
        td[0].innerHTML = feed.Number;
        td[1].innerHTML = feed.Name;
        td[2].innerHTML = feed.Email;
        td[3].innerHTML = feed.Comment;
        td[4].innerHTML = '<input type="button" onclick="deleteContact(this)" value="delete" id="button-1">';
        
    });  
}



const deleteContact = async(r) => {
    if (confirm('Are you sure you want to DELETE this comment?')) {
        selectedRow = r.parentElement.parentElement;
        num = selectedRow.cells[0].innerHTML;
        fetch('/contact/delete/'+num,{
            method: "Delete",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });
        var rowIndex = selectedRow.rowIndex;
        if (rowIndex>0) {
            document.getElementById("Table").deleteRow(rowIndex);
        }
        selectedRow = null;
    }
}
