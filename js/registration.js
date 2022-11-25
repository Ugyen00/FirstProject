window.onload = function () {
    fetch('/registration/getall')
        .then(response => response.text())
        .then(data => getRegistrations(data));
        
    fetch('/contact/getall')
    .then(response => response.text())
    .then(data => getContacts(data));
}

var selectedRow = null;

async function addRegistration(){
    var _data ={
        UserID : parseInt(document.getElementById("uid").value),
        FirstName : document.getElementById("fname").value,
        LastName : document.getElementById("lname").value,
        Email : document.getElementById("email").value,
        MobileNo : document.getElementById("mobileno").value,
        AccountType : document.getElementById("accounttype").value,
        AccountNo : parseInt(document.getElementById("accountno").value),
        Amount :parseInt( document.getElementById("amount").value),

    }
    var uid = _data.UserID;
    if (isNaN(uid)) {
        alert("User ID cannot be empty")
        return
    }
    console.log(uid)

    fetch('/registration/add', {
        method: "POST",
        body: JSON.stringify(_data),
        headers: {"Content-type": "application/json; charset=UTF=8"}
    })
    .then(() => {
        fetch('/registration/get/'+uid)
        .then(response => response.text())
        .then(data => getRegistration(data))
    });
    resetForm();
}

async function getRegistration(data) {
    
    const registration = JSON.parse(data)
    var table = document.getElementById("myTable");

    var row = table.insertRow(table.length);

    var td=[]
    for(i=0; i<table.rows[0].cells.length; i++){
        td[i] = row.insertCell(i)
    }

    td[0].innerHTML = registration.UserID;
    td[1].innerHTML = registration.FirstName;
    td[2].innerHTML = registration.LastName;
    td[3].innerHTML = registration.Email;
    td[4].innerHTML = registration.MobileNo;
    td[5].innerHTML = registration.AccountType;
    td[6].innerHTML = registration.AccountNo;
    td[7].innerHTML = registration.Amount;
    td[8].innerHTML = '<input type="button" onclick="deleteRegistration(this)" value="delete" id="button-1">';
    

}

function resetForm() {
    document.getElementById("uid").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobileno").value = "";
    document.getElementById("accounttype").value = "";
    document.getElementById("accountno").value = "";
    document.getElementById("amount").value = "";
}

async function getRegistrations(data) {
    const registrations = JSON.parse(data)
    registrations.forEach(regi => {
        var table = document.getElementById("myTable");
        var row = table.insertRow();
        var td=[]
        for(i=0; i<table.rows[0].cells.length; i++){
            td[i] = row.insertCell(i);
        }
         
        td[0].innerHTML = regi.UserID;
        td[1].innerHTML = regi.FirstName;
        td[2].innerHTML = regi.LastName;
        td[3].innerHTML = regi.Email;
        td[4].innerHTML = regi.MobileNo;
        td[5].innerHTML = regi.AccountType;
        td[6].innerHTML = regi.AccountNo;
        td[7].innerHTML = regi.Amount;
        td[8].innerHTML = '<input type="button" onclick="deleteRegistration(this)" value="delete" id="button-1">';
        
    });  
}



const deleteRegistration = async(r) => {
    if (confirm('Are you sure you want to DELETE this User?')) {
        selectedRow = r.parentElement.parentElement;
        uid = selectedRow.cells[0].innerHTML;
        fetch('/registration/delete/'+uid,{
            method: "Delete",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });
        var rowIndex = selectedRow.rowIndex;
        if (rowIndex>0) {
            document.getElementById("myTable").deleteRow(rowIndex);
        }
        selectedRow = null;
    }
}