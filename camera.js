   var pictureSource;   // picture source
    var destinationType; // sets the format of returned value






   


    function onPhotoDataSuccess(imageData) 
		{
     // console.log(imageData);
	   largeImage.style.display = 'block';
       largeImage.src  = "data:image/jpeg;base64," + imageData;
	   	setTimeout("redraw();", 1000);
		console.log("drawing");
	    }

 
    function onPhotoURISuccess(imageURI) {
      console.log(imageURI);
      var largeImage = document.getElementById('largeImage');
      largeImage.style.display = 'block';
      largeImage.src = imageURI;

	  

    }

function redraw()
{
ctx.save(); 
	ctx.translate(355, 0); 
	ctx.rotate(3.14/2); 
	ctx.drawImage(largeImage, 0, 0, 600, 355); 
	ctx.restore();
	setTimeout("redraw();", 1000);
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