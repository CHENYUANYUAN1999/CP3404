function validateForm() { 
	var fName = document.getElementById("fName").value; 
	var email = document.getElementById("email").value;
    var lName = document.getElementById("lName").value;
    var phone = document.getElementById("phone").value;

	if (fName == "") { 
		alert("Name must be filled out"); 
		return false; 
	}
	if (email == "") { 
		alert("Email must be filled out"); 
		return false; 
    }
    if (lName == ""){
        alert("Name must be filled out")
        return false;
    }
    if (phone == ""){
        alert("Phone must be filled out")
        return false;
    }

    if (!document.getElementById("grpfit").checked && !document.getElementById("prtrain").checked && !document.getElementById("nutr").checked){
        alert("At least one must be choosen")
        return false;
    }
    return true;

}