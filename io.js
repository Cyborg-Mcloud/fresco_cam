
var cursaveimage="";

function SaveImg(myimg)
	{
	cursaveimage=myimg;
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotfswrite_image, fail);
	}


function gotfswrite_image(fileSystem) 
	{
	fileSystem.root.getFile("dresco/imgs/"+cursaveimage, {create: true, exclusive: false}, gotFileEntry_image, fail);
	}

function gotFileEntry_image(fileEntry) 
	{
	fileEntry.createWriter(gotFileWriter_image, fail);
	}


function gotFileWriter_image(writer) 
	{
	writer.write(curimgtext);
	console.log("saved image: "+cursaveimage+";");
	}


function WriteData()
	{

	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotfswrite, fail);
	}

function ReadData()
	{
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotfsread, fail);
	}

function gotfswrite(fileSystem) 
	{
	fileSystem.root.getFile("dresco/sets.txt", {create: true, exclusive: false}, gotFileEntry, fail);
	}

function gotfsread(fileSystem)
	{
	fileSystem.root.getFile("dresco/sets.txt", null, gotFileEntry2, fail2);
	}

function gotFileEntry(fileEntry) 
	{
	fileEntry.createWriter(gotFileWriter, fail);
	}

// SAVE SETTINGS
function gotFileWriter(writer) 
	{
	writer.write(myid+";"+uname+";"+email+";"+persid+";"+gender+";"+mylib+";"+alarmtime+";");
	console.log("saved: "+myid+";"+uname+";"+email+";"+persid+";"+gender+";"+mylib+";"+alarmtime+";");
	}

function fail(error)
	{
	alert("error: "+error.code);
	}



function gotFileEntry2(fileEntry) 
	{
	fileEntry.file(gotFile, fail);
	}

function gotFile(file)
	{
	readAsText(file);
	}

function readAsText(file) 
	{
	var reader = new FileReader();
	reader.onloadend = function(evt) 
		{
		var myData =evt.target.result;
		a=myData.split(";");
		myid=a[0];
		uname=a[1];
		email=a[2];
		persid=a[3];
		gender=a[4];
		mylib=a[5];
		alarmtime=a[6];

		if (alarmtime=="")	{alarmtime="08:00";}	
		console.log("read: "+myData);
		};
	reader.readAsText(file);
	}

function fail2(evt) 
	{
	alert(evt.target.error.code);
	}

function checkIfFileExists(path)
	{
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){fileSystem.root.getDirectory("dresco", {create: true, exclusive: false}, fileExists, fileDoesNotExist); } , getFSFail); 
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){fileSystem.root.getDirectory("dresco/imgs", {create: true, exclusive: false}, fileExists, fileDoesNotExist); } , getFSFail); 
	if (path!="")
		{
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){fileSystem.root.getFile("dresco/"+path, { create: false }, fileExists, fileDoesNotExist);}, getFSFail); 
		}

	}
function checktile(path)
	{
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){fileSystem.root.getFile("dresco/imgs/"+path, { create: false }, tilefound, notile);}, getFSFail); 
	}

function tilefound(fileEntry)
	{
	tilef=1;
//	alert("found");
//	alert("size: ".fileEntry.size);

	}
function notile()
	{
	tilef=0;
	}

function fileExists(fileEntry)
	{
    dataex=1;
	console.log("found");
	}
function fileDoesNotExist()
	{
    dataex=0;
	console.log("not found");
	}
function getFSFail(evt)
	{
    console.log(evt.target.error.code);
	}



