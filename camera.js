



function onPhotoDataSuccess(imageData) 
	{
 // console.log(imageData);
 //  largeImage.style.display = 'block';
 loadedimage=new Image();
   loadedimage.src  = "data:image/jpeg;base64," + imageData;
   document.getElementById("preview").src="data:image/jpeg;base64," + imageData;
	imgtaken=1;
	console.log("image taken with camera");
	showprops();
	}

 
function onPhotoURISuccess(imageURI) 
	{
//		largeImage.src="sample.png";
//imageURI=imageURI.replace("%3A",":");
    console.log(imageURI);

//      largeImage.style.display = 'block';
 loadedimage=new Image();
	loadedimage.src = imageURI;
	   document.getElementById("preview").src=imageURI;
	imgtaken=1;
	console.log("image loaded");
	showprops();
	
    }

var myrot=0; //3.14/2;

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
			{	ctx.drawImage(loadedimage, 0, 0, 600, 355); }
		else
			{ctx.drawImage(loadedimage, 0, 0, 355, 600); }

			
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
	console.log("re-draw");
	if (imgtaken==1)
		{	
		//	c.width=c.width;
		if (myrot>0)
		{
		
		ctx.save(); 
		ctx.translate(355, 0); 
		ctx.rotate(myrot); 
		}

		ctx.drawImage(loadedimage, 0, 0, 600, 355); 		
		if (myrot>0)
		{
		ctx.restore();
		}
		document.getElementById("rotator_but").style.visibility="visible";
		}
	else
		{	ctx.drawImage(largeImage, 0, 0);
			document.getElementById("rotator_but").style.visibility="hidden";
		}
	
	setTimeout("redraw();", 1000);
	}
}


    function capturePhoto()
		{
//onPhotoDataSuccess();
//console.log("ager");
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, destinationType: destinationType.DATA_URL });

	//navigator.camera.getPicture(onPhotoURISuccess, photoOnFail, { quality: 50, destinationType: destinationType.FILE_URI });
    }

    function capturePhotoEdit() {
    
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }


    function getPhoto(source) {

      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 20,
        destinationType: destinationType.FILE_URI,
        sourceType: pictureSource.PHOTOLIBRARY });
    }


    function onFail(message) {
      console.log('Failed because: ' + message);
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
