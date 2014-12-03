$(document).ready(function(){
	var a= -Math.PI/180*90;
	var st=Metrix(1,0,0,1,-200,-200);
	var r=Metrix(Math.cos(a),-Math.sin(a),Math.sin(a),Math.cos(a),0,0);
	var et=Metrix(1,0,0,1,200,200);
	var rs;
	$("#p1").click(function(){
		rs=st;
	 	$("line").attr("transform",getTransform(rs));
	});

	$("#p2").click(function(){
	rs=multiMetrixAandB(r,st);
	 	$("line").attr("transform",getTransform(rs)
	 		);
	});

	$("#p3").click(function(){
	rs=multiMetrixAandB(et,multiMetrixAandB(r,st));
	 	$("line").attr("transform",getTransform(rs));
	});
	function getTransform(metrix){
		return "matrix("+metrix[0][0]+","+metrix[1][0]+","+metrix[0][1]+","+metrix[1][1]+","+metrix[0][2]+","+metrix[1][2]+")";

	}
	function Metrix(a,b,c,d,e,f){
		var _TheArray = [[a,c,e],[b,d,f],[0,0,1]]
		return _TheArray
	}

	function multiMetrixAandB( metrixA,  metrixB) {
		var result=  [[0,0,0],[0,0,0],[0,0,0]]
		var x; 
		var i;
		var j; 
		var tmp = 0;
		for (i = 0; i < metrixA.length; i++) {
			for (j = 0; j < metrixB[0].length; j++) {
				for (x = 0; x < metrixB.length; x++)
					tmp += metrixA[i][x] * metrixB[x][j];

				result[i][j] = tmp;
				tmp = 0; 
			}
		}
	
		console.info("\n" + "矩阵A*B的值为：");
		for (i = 0; i < result.length; i++) {
			for (j = 0; j < result[i].length; j++) {
				console.info(result[i][j] + " ");
			}
			console.info("\n");
		}
		return result;
	}
	});