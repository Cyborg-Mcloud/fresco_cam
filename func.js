var chstylewidth=110;
var bpartwidth=110;
var stylewidth=110;
var colwidth=90;
var tempwidth=90;
var maxcolor=6;
var maxtemp=5;
var maxstyle=4;
var maxbpart=4;
var maxchstyle=4;

var selbpart=1;
var selstyle=1;
var selcolor=1;
var seltemp=1;
var selchstyle=1;



function startfunc()
	{
	if (curslide==1)
		{timecounter++;
		if (timecounter==1)
			{
			console.log("dataex: "+dataex);
			if (dataex==0)
				{
				WriteData();
				}	
			ReadData();
			setTimeout("startfunc();",1000);
			}
		else if (timecounter>3)
			{
			if (myid==0)
				{
				console.log("first start");
				change_slide(2);
				}
			else
				{
				console.log("changing slide");
				change_slide(4);
				}
			}
		else
			{
			setTimeout("startfunc();",1000);
			}
		}
	}



function change_slide(newslide)
{
	document.getElementById("slide_"+curslide).style.visibility="hidden";
	curslide=newslide;
	document.getElementById("slide_"+curslide).style.visibility="visible";
	if (curslide==3)
		{
		focussel("bpart_sel",bpartwidth, selbpart);
		setTimeout("redraw();", 1000);
		}
	else if (curslide==4)
		{
		req_mylib();
		}
}

function req_mylib()
	{

	url='http://design.ge/fresco/reqlib.php?myid='+myid;
	console.log(url);
	gamehttp.open('GET',url,true);
	gamehttp.send();

	}


function downimg(murl)
	{
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, 
	function(fileSystem)
		{
		
		fileSystem.root.getFile("locage/imgs/dummy.html", {create: true, exclusive: false}, 
		function gotFileEntry(fileEntry) 
			{
			var sPath =fileEntry.fullPath.replace("dummy.html","");
			var fileTransfer = new FileTransfer();
			fileTransfer.download(murl,	sPath + murl, function(theFile) {console.log("success");},	function(error) {
				//alert("download error source " + error.source);
                //alert("download error target " + error.target);
				console.log("upload error code: " + error.code);});
			}, fail);
		}, fail);
	}


 function fail(evt) 
	{
    console.log(evt.target.error.code);
    }

function focussel(divname, cellwidth, selid)
	{
	document.getElementById(divname).style.left=(105-(selid*cellwidth-cellwidth/2))+"px";
	}


function styleright()
	{
	if (selstyle<maxstyle)
		{
		selstyle+=1;
		focussel("style_sel",stylewidth, selstyle);
		}
	}

function styleleft()
	{
	if (selstyle>1)
		{
		selstyle-=1;
		focussel("style_sel",stylewidth, selstyle);
		}
	}


function feriright()
	{
	if (selcolor<maxcolor)
		{
		selcolor+=1;
		focussel("feri_sel",colwidth, selcolor);
		}
	}

function ferileft()
	{
	if (selcolor>1)
		{
		selcolor-=1;
		focussel("feri_sel",colwidth, selcolor);
		}
	}


function bpartright()
	{
	if (selbpart<maxbpart)
		{
		selbpart+=1;
		focussel("bpart_sel",bpartwidth, selbpart);
		}
	}

function bpartleft()
	{
	if (selbpart>1)
		{
		selbpart-=1;
		focussel("bpart_sel",bpartwidth, selbpart);
		}
	}


function chstyleright()
	{
	if (selchstyle<maxchstyle)
		{
		selchstyle+=1;
		focussel("chstyle_sel",chstylewidth, selchstyle);
		}
	}

function chstyleleft()
	{
	if (selchstyle>1)
		{
		selchstyle-=1;
		focussel("chstyle_sel",chstylewidth, selchstyle);
		}
	}

var stvis=0;

function show_styles()
	{
	if (stvis==0)
		{document.getElementById("mystyle").style.display="block";
		stvis=1;
		}
	else
		{document.getElementById("mystyle").style.display="none";
		stvis=0;
		suggestme();
		}
	}

function tempright()
	{
	if (seltemp<maxtemp)
		{
		seltemp+=1;
		focussel("temp_sel",tempwidth, seltemp);
		}
	}

function templeft()
	{
	if (seltemp>1)
		{
		seltemp-=1;
		focussel("temp_sel",tempwidth, seltemp);
		}
	}



function showprops()
	{
	document.getElementById("propsover").style.display="inline";

	focussel("style_sel",stylewidth, selstyle);
	focussel("feri_sel",colwidth, selcolor);
	focussel("temp_sel",tempwidth, seltemp);

	}

function closeprops()
	{
	document.getElementById("propsover").style.display="none";
	}