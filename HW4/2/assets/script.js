function getElementId(){
    var name = document.getElementById("stdName").value;
    var Id = document.getElementById("stdId").value;
    var confirm = document.getElementById("stdConfirm").checked;
    debugger;
    if(name == ''|| Id == '' || confirm == false)
    {
        alert('Please fill all fields')
        return false;
    }
    
    else{
        alert ('Submited successfully')
        return true;
    }
    
}
