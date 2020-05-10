function target_popup(form) {
    window.open('', 'formpopup', 'width=400,height=400,resizeable,scrollbars');
    form.target = 'formpopup';
}

function myAlertBox() {
	var alertString ="";
	var cmp = "Company: " + document.getElementById("company").value + "\n";
	var fnm = "Contact First Name: " + document.getElementById("fname").value + "\n";
	var lnm = "Contact Last Name: " + document.getElementById("lname").value + "\n";
	var cty = "City: " + document.getElementById("city").value + "\n";
	var sta = "State: " + document.getElementById("state").value + "\n";
	var zip = "Zip: " + document.getElementById("zip").value + "\n";
	var phn = "Phone: " + document.getElementById("phone").value + "\n";
	var eml = "Contact Email: " + document.getElementById("email").value + "\n";
	var cmt = "Comments: " + document.getElementById("comments").value + "\n";
	alertString = cmp + fnm + lnm + cty + sta + zip + phn + eml + cmt;
	alert(alertString);
}