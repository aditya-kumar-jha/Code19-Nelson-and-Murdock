var data=[12,13,1,2,3,4,5,6,7,8,90,1,1,2,3,4,5]
var num=[1,2,3,4,5,6,7,8,9,10];
var count=10,i=0
var all=""
var c=1;
var next = document.getElementById("accordion"); 
//var pname=["xyz","123","asd","wer","dcv","wer","sdf","sdr","ffd","ddd","sdf","ffdf"];

 function tryload(index ){
 	var i=index;
 	c=0;
	var tempImg = new Image();
   tempImg.src = 'images/' + index + '.jpg';
   tempImg.onload = function(){
   vars(i);
   tryload(++i);
}
}

function vars(i)
{	
	var myvar = '<div class="panel panel-default">'+
'    <div class="panel-heading">'+
'      <h4 class="panel-title">'+
'        <a data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'">'+
'Patient'+i+'</a>'+
'      </h4>'+
'    </div>'+
'    <div id="collapse'+i+'" class="panel-collapse collapse">'+
'      <div class="panel-body">'+'<img  src=images/'+i+'.jpg><button id="buttonp'+i+'" class="pos">positve</button><button id="buttonn'+i+'" class="neg">negative</button>'+'</div>'+
'    </div>'+
'  </div>';
	all+=myvar;
	next.innerHTML+=myvar;
	console.log(all);

}
tryload(1);
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
window.onload = function() {

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
			{y: 20, label: "positive"},
			{y: 80, label: "negative"}
		]
	}]
});
chart.render();

}