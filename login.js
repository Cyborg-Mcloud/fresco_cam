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


function save_prof()
	{
	uname=document.getElementById("prof_uname").value;
	email=document.getElementById("prof_email").value;
	persid=document.getElementById("prof_persid").value;
	var mg=document.getElementById("prof_myfemale");
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
		url='http://design.ge/fresco/save_prof.php?myid='+myid+'&uname='+uname+'&email='+email+'&persid='+persid+'&gender='+gender;
		gamehttp.open('GET',url,true);
		gamehttp.send();

		}
	}


function open_prof()
{
document.getElementById("prof_uname").value=uname;
document.getElementById("prof_email").value=uname;
document.getElementById("prof_persid").value=uname;
if (gender==1)
	{document.getElementById("prof_female").checked=true}
else
	{document.getElementById("prof_male").checked=true}

change_slide(5);
}