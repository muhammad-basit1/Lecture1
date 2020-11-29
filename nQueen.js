var taSol1, taSol2, taSol3;
var btnRun;
const LablesForGraph1 = [];
const DataForGraph1 = [];
const LablesForGraph2 = [];
const DataForGraph2 = [];
const LablesForGraph3 = [];
const DataForGraph3 = [];
window.onload = function() {
	console.log("Hooray! Its working");
	taSol1 = document.getElementById('ta_sol1');
	taSol2 = document.getElementById('ta_sol2');
	taSol3 = document.getElementById('ta_sol3');
	btnRun = document.getElementById('btnRun');
} //end window.onload

function runEmAll(){
	console.log("Running All Solutions")
	taSol1.value = ""; 	taSol2.value = ""; 	taSol3.value = "";
	var start;
	var end;
	var n=4;
	for (var k = 4; k <= 16; k++) {
		//Runs each solution and measures performance in microseconds
		console.log("In Forloop: Line 18, k = "+k+"\n");
		start = performance.now();
		sol1(n);
		end = performance.now();
		LablesForGraph1.push(n)
		DataForGraph1.push((end-start)*1000)
		taSol1.value+= ""+n+", "+(end-start)*1000+"\n";
		
		start = performance.now();
		sol2(n);
		end = performance.now();
		LablesForGraph2.push(n)
		DataForGraph2.push((end-start)*1000)
		taSol2.value+= ""+n+", "+(end-start)*1000+"\n";
		
		start = performance.now();
		sol3(n);
		end = performance.now();
		LablesForGraph3.push(n)
		DataForGraph3.push((end-start)*1000)
		taSol3.value+= ""+n+", "+(end-start)*1000+"\n";
		n = n * 2;
		}//end for
		createGragh();
		createGragh2();
		createGragh3();

}//end runEmAll

function createGragh(){
	var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: LablesForGraph1,
        datasets: [{
            label: 'First Graph',
            data: DataForGraph1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    }
});
}

function createGragh2(){
	var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: LablesForGraph1,
        datasets: [{
            label: 'Second Graph',
            data: DataForGraph1,
            backgroundColor: [
                'rgba(255, 210, 132, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    }
});
}

function createGragh3(){
	var ctx = document.getElementById('myChart3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: LablesForGraph1,
        datasets: [{
            label: 'Third Graph',
            data: DataForGraph1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    }
});
}

function sol1(n){
	//Implement your brute-force solution here

	//--This is garbage code: Remove this--//
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n ; j=j*2) {
			for(var k=0;k<50;k++);
		}//end for j
	}//end for i
	//-- End of garbage code --//

	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}//end sol1

function sol2(n){
	//Implement your recursive back-tracking solution here

	//--This is garbage code: Remove this--//
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n; j++) {
			for(var k=0;k<50;k++);
		}//end for i
	}//end for j
	//-- End of garbage code --//

	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}//end sol2

function sol3(n){
	//Implement your dynammic programming solution here

	//--This is garbage code: Remove this--//
	for (var i = 1; i <= n; i++) {
		for(var k=0;k<50;k++);
	}//end for j
	//--End of Garbage Code--//

	//Mention reference where you got the solution
	//Ref: http://
	//Ref: If you found any paper
}//end sol3
