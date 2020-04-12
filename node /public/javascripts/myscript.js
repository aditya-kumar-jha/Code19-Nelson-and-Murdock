
var all=""
var update=document.getElementById("updateDataPoint");
var negc=0, posc=0,c=0;
var predict=[50,20,36,71,45,67,95,21];
var next = document.getElementById("accordion"); 
var poss=document.getElementById("poss");
var negg=document.getElementById("negg");
//var pname=["xyz","123","asd","wer","dcv","wer","sdf","sdr","ffd","ddd","sdf","ffdf"];

 function tryload(index ){
 	var i=index
	var tempImg = new Image();
	
   tempImg.src = '../images/' + index + '.jpg';
   tempImg.onload = function(){
   vars(i);
   tryload(++i);



}
window.stop;
}

function vars(i)
{	
	var myvar = '<div class="panel panel-default" id="head'+i+'">'+
'    <div class="panel-heading">'+
'      <h4 class="panel-title">'+
'        <a data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'">'+
'Patient'+i+''+predict[i]+'%</a>'+
'      </h4>'+
'    </div>'+
'    <div id="collapse'+i+'" class="panel-collapse collapse">'+
'      <div class="panel-body">'+'<a href="../images/'+i+'.jpg"><img  src=../images/'+i+'.jpg></a><button id="buttonp'+i+'" class="pos">positve</button><button id="buttonn'+i+'" class="neg">negative</button>'+'</div>'+
'    </div>'+
'  </div>';
	all+=myvar;
	next.innerHTML+=myvar;
	console.log(all);
	 event();
	c+=1;

}
tryload(1);
event();
// call(7);               

// var tryLoadImage = function( index ){
// 	var tempImg = new Image();
//    tempImg.src = 'images/' + index + '.jpg';
//    tempImg.onload = function(){
//    appendImage(tempImg);
// }
// }
// var appendImage = function(tempImg){
//    var img = document.createElement('img');
//    img.src = tempImg.src;
//    document.body.appendChild( img )
//    tryLoadImage( index++ )
// }
// tryLoadImage( index );
console.log(all);
//console.log(myvar);


////////////////////////////////////////////////
document.getElementById("updateDataPoint").addEventListener("click",function() {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title: {
		text: "Covid 19 patient's statistics"
	},
	data: [{
		type: "pie",
		startAngle: 240,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: (posc/(posc+negc))*100, label: "positive",color:"red"},
			{y: (negc/(posc+negc))*100, label: "negative",color:"green"}
		]
	}]
});
chart.render();
})

var docp=[]
var docn=[]

//window.addEventListener("click",event,false)
////////////////////////////////////////////////
function event(){
	for(var i=1;i<=c;i++){
	console.log(i);
	docp[i]=document.getElementById("buttonp"+i);
	docn[i]=document.getElementById("buttonn"+i);
	console.log(docn[i]);
 }
 ax();
}
ax();
function ax(){

 document.querySelectorAll(".neg").forEach(function(element){
 	element.addEventListener("click",function(){
 		var st=Number(element.id.charAt(7));
 		var y=document.getElementById("head"+st);
 		var myvar='<li class="list-group-item">Patient'+st+'    <a href="images/'+st+'.jpg"><i>  X ray</i></a></li>';
 		negg.innerHTML+=myvar;
 		negc+=1;
 		y.remove();
 		update.click();


 	})
 })

document.querySelectorAll(".pos").forEach(function(element){
 	element.addEventListener("click",function(){

 		var st=Number(element.id.charAt(7));
 		var y=document.getElementById("head"+st);
 		var myvar='<li class="list-group-item">Patient'+st+'    <a href="images/'+st+'.jpg"><i>  X-ray</i></a></li>';
 		poss.innerHTML+=myvar;
 		posc+=1;
 		y.remove();
 		update.click();
 	})
 })
}