var gender;
var uname;
var email;
var persid;


function regme()
	{
	uname=document.getElementById("uname").value;
	email=document.getElementById("email").value;
	persid=document.getElementById("persid").value;
	var mg=document.getElementById("myfemale");
	gender=1;
	if (mg.checked==true)
		{gender=1;}	
	else
		{gender=2;}

	if (uname=="" || email=="" || persid=="")
		{
		alert("გთხოვთ შეიყვანოთ სახელი, ელ.ფოსტა და პირადი ნომერი");
		}
	else
		{
		url='http://design.ge/fresco/regme.php?uname='+uname+'&email='+email+'&persid='+persid+'&gender='+gender;
		gamehttp.open('GET',url,true);
		gamehttp.send();

		}
	}

function fblogin()
	{
	change_slide(3);
	}
