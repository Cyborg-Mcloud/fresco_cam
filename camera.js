   var pictureSource;   // picture source
    var destinationType; // sets the format of returned value


var imgtaken=0;


var largeImage=new Image();
largeImage.src="sample.png";
   



function onPhotoDataSuccess(imageData) 
	{
 // console.log(imageData);
 //  largeImage.style.display = 'block';
   largeImage.src  = "data:image/jpeg;base64," + imageData;
	imgtaken=1;
	console.log("drawing");
	showprops();
	}

 
function onPhotoURISuccess(imageURI) 
	{
		largeImage.src="sample.png";
    console.log(imageURI);

//      largeImage.style.display = 'block';
	largeImage.src = imageURI;
	imgtaken=1;
	console.log("image taken");
	showprops();
	
    }

var myrot=6.28; //3.14/2;

function rotateme()
	{
	if (imgtaken==1)
		{


		ctx.clearRect(0, 0, 355, 600);
		myrot+=3.14/2;


		console.log("rotated:"+myrot);
		ctx.save(); 
		if (myrot==3.14/2)
			{ctx.translate(355, 0);}
		else if  (myrot==3.14)
			{ctx.translate(355, 600);}
		else if (myrot==3.14+3.14/2)
			{ctx.translate(0, 600);}
		else if (myrot==6.28)
			{myrot=0;
			ctx.translate(0, 0);}

		ctx.rotate(myrot); 

		if (myrot==3.14/2 || myrot==(3.14+3.14/2))
			{	ctx.drawImage(largeImage, 0, 0, 600, 355); }
		else
			{ctx.drawImage(largeImage, 0, 0, 355, 600); }

			
		ctx.restore();
		}
	else
		{
		myrot=6.28;
		}
	}

function redraw()
{
if (curslide==3)
	{
	if (imgtaken==1)
		{	
		ctx.save(); 
		ctx.translate(355, 0); 
		ctx.rotate(myrot); 
		ctx.drawImage(largeImage, 0, 0, 600, 355); 		
		ctx.restore();
		}
	else
		{	ctx.drawImage(largeImage, 0, 0);}
	
	setTimeout("redraw();", 1000);
	}
}


    function capturePhoto() {
//onPhotoDataSuccess();
//console.log("ager");
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, destinationType: destinationType.DATA_URL });
    }

    function capturePhotoEdit() {
    
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }


    function getPhoto(source) {

      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }


    function onFail(message) {
      alert('Failed because: ' + message);
    }



function savedress()
	{
	var c=document.getElementById("mycan");
	if (editing==0)
		{
		console.log("new saved");
		var img1    = c.toDataURL("image/png");
		url='http://design.ge/fresco/upload_dress.php?saveme=123';
		gamehttp.open('POST',url,true);
		gamehttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		var sendstr="color="+selcolor;
		 sendstr+="&temp="+seltemp;
		 sendstr+="&style="+selstyle;
		 sendstr+="&bpart="+selbpart;
		sendstr+="&myid="+myid;
		 sendstr+="&img="+img1;
		daelode(1);
		gamehttp.send(sendstr);
		}
	else
		{
		console.log("editing saved:"+editing);
		
		var img1= c.toDataURL("image/png");
		url='http://design.ge/fresco/upload_dress.php?saveme=123&editid='+editing;
		gamehttp.open('POST',url,true);
		gamehttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		var sendstr="color="+selcolor;
		 sendstr+="&temp="+seltemp;
		 sendstr+="&style="+selstyle;
		 sendstr+="&bpart="+selbpart;
		sendstr+="&myid="+myid;
		 sendstr+="&img="+img1;
		 sendstr+="&editing="+editing;
		daelode(1);
		gamehttp.send(sendstr);
		editing=0;
		}
	}
