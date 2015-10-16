var garstylewidth=110;
var chstylewidth=110;
var bpartwidth=130;
var stylewidth=110;
var colwidth=100;
var tempwidth=90;


var maxcolor=6;
var maxtemp=5;
var maxstyle=4;
var maxbpart=2;
var maxchstyle=4;
var maxgarstyle=4;

var selgarstyle=1;
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
	var tartime
var timvis=0;
function show_timer()
	{

	if (timvis==0)
		{
		document.getElementById("timer_div").style.display="block";
		document.getElementById("timer_time").value=alarmtime;
		timvis=1;
		}
	else
		{
		document.getElementById("timer_div").style.display="none";
		timvis=0;

		
		var now = new Date().getTime(),

		tartime=document.getElementById("timer_time").value;
		alarmtime=tarttime;
		tt=tartime.split(":");

	    sqej = new Date(2014, 01,01,tt[0],tt[1],00,00);
		console.log(sqej);
		console.log(now);
		window.plugin.notification.local.schedule({
		id:         "123123123123",  // A unique id of the notifiction
		message:    "დღის ჩაცმულობა",  // The message that is displayed
		title:      "Dresco",  // The title of the message  
		 at: sqej,
		  every: "day",
		});
		window.scrollTo(0, 0);
		}

	}





function show_weather()
	{
	if (wvis==0)
		{
		document.getElementById("weather_show").style.display="block";
		wvis=1;
		}
	else
		{
		document.getElementById("weather_show").style.display="none";
		wvis=0;
		}
	}

function change_slide(newslide)
	{
	document.getElementById("slide_"+curslide).style.visibility="hidden";
	curslide=newslide;
	document.getElementById("slide_"+curslide).style.visibility="visible";
	if (curslide==3)
		{
		if (editing==0)
			{
			largeImage.src="sample.png";
			}
		document.getElementById("largeImage").src=largeImage.src;
		focussel("bpart_sel",bpartwidth, selbpart);
		focussel("style_sel",stylewidth, selstyle);
		focussel("feri_sel",colwidth, selcolor);
		focussel("temp_sel",tempwidth, seltemp);
		setTimeout("redraw();", 100);
		}
	else if (curslide==4)
		{
		req_mylib();
		}
	else if (curslide==6)
		{
		focussel("garstyle_sel",garstylewidth, selgarstyle);
		show_garderob();
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


function chgarright()
	{
	if (selgarstyle<maxgarstyle)
		{
		selgarstyle+=1;
		focussel("garstyle_sel",garstylewidth, selgarstyle);
		show_garderob();
		}
	}

function chgarleft()
	{
	if (selgarstyle>1)
		{
		selgarstyle-=1;
		focussel("garstyle_sel",garstylewidth, selgarstyle);
		show_garderob();
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
		{
		document.getElementById("mystyle").style.display="block";
		stvis=1;
		}
	else
		{
		document.getElementById("mystyle").style.display="none";
		stvis=0;
		console.log("daxurva");
		suggestme();
		document.getElementById("mystyle").style.display="none";
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



var mstx=0;
var msty=0;
var mex=0;
var mey=0;
var mclicked=0;
var curbox=0;

function mdown(e, cb)
	{
	curbox=cb;
		mclicked=1;
	mstx=e.changedTouches[0].clientX ;
	msty=e.changedTouches[0].clientY ;

//	document.getElementById("infodiv").innerHTML=mstx;
	}

function mup(e)
	{
	var a,b,c;
	
		if (mclicked==1)
			{
			mex= e.changedTouches[0].clientX ;
			mey= e.changedTouches[0].clientY ;

		//	document.getElementById("infodiv").innerHTML=mstx+ " - "+mex;
			}
		mclicked=0;

	}


function mmove(e)
	{		
	var raznica=0;
	var mleft=0;
	var mright=0;
	if (mclicked==1)
		{

		mex= e.changedTouches[0].clientX ;
		mey= e.changedTouches[0].clientY ;

		raznica=mex-mstx;
		//		document.getElementById("infodiv").innerHTML=mstx+ " - "+mex+" = "+raznica + " c:"+curbox;
		if (raznica>45)
			{
			mstx=mex;

			mleft=1;
			}
		else	if (raznica<-45)
			{				
			mstx=mex;

			mright=1;
			}
		

		if (mleft==1)
			{
			if (curbox==1)	{bpartleft();}
			else if (curbox==2)	{styleleft();}
			else if (curbox==3)	{ferileft();}
			else if (curbox==4)	{templeft();}
			else if (curbox==5)	{chstyleleft();}
			else if (curbox==6)	{chgarleft();}

			console.log("move left");
			}

		if (mright==1)
			{
			if (curbox==1)	{bpartright();}
			else if (curbox==2)	{styleright();}
			else if (curbox==3)	{feriright();}
			else if (curbox==4)	{tempright();}
			else if (curbox==5)	{chstyleright();}
			else if (curbox==6)	{chgarright();}
			
			console.log("move right");
			}
		}
	
	}