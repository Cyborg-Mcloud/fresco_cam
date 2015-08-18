var bpartwidth=110;
var stylewidth=110;
var colwidth=90;
var tempwidth=90;
var maxcolor=6;
var maxtemp=5;
var maxstyle=4;
var maxbpart=4;

var selbpart=1;
var selstyle=1;
var selcolor=1;
var seltemp=1;




function startfunc()
	{
	if (curslide==1)
		{timecounter+=1;
		if (timecounter>0)
			{
			if (myid==0)
				{
				console.log("first start");
				change_slide(2);
				}
			else
				{
				change_slide(4);
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
		}
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