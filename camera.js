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
    console.log(imageURI);

//      largeImage.style.display = 'block';
	largeImage.src = imageURI;
	imgtaken=1;
	console.log("image taken");
		showprops();
	
    }

var myrot=3.14/2;

function rotateme()
	{
	ctx.clearRect(0, 0, 355, 600);
	myrot+=3.14/2;
	redraw();
	console.log(myrot);
	ctx.save(); 
	ctx.translate(355, 0); 
	ctx.rotate(myrot); 
	ctx.drawImage(largeImage, 0, 0, 600, 355); 		
	ctx.restore();
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
		{	ctx.drawImage(largeImage, 25, 0);}
	
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

	gamehttp.send(sendstr);
	}
