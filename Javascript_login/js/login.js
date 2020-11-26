var attempt = 3; //Variable to count number of attempts

//Below function Executes on click of login button
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if ( username == "ami" && password == "123"){
		alert ("Login successfully");
		window.location = "https://docs.google.com/spreadsheets/d/1AI7DEvo1mcMqnn_IpFzu5DLskCMtf4_IzufXcVF2cZ0/edit?usp=sharing"; //redirecting to other page
		return false;
	}
	else if ( username == "kinjal" && password == "456"){
		alert ("Login successfully");
		window.location = "Book1.htm"; //redirecting to other page
		return false;
	}
	else{
		attempt --;//Decrementing by one
		alert("You have left "+attempt+" attempt;");
		
		//Disabling fields after 3 attempts
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}