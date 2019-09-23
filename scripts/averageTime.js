let averageTimes = JSON.parse(localStorage.getItem("averageTime"));
let avgA = countAverageTime(sumTotalS(averageTimes.workerA), averageTimes.workerA.length);
let avgB = countAverageTime(sumTotalS(averageTimes.workerB), averageTimes.workerB.length);
let avgC = countAverageTime(sumTotalS(averageTimes.workerC), averageTimes.workerC.length);

$('#avgHours--A').html(avgA);
$('#avgHours--B').html(avgB);
$('#avgHours--C').html(avgC);

function sumTotalS(arr) {
    let s = 0;
    for(let i = 0; i < arr.length; i++) {
        s += arr[i];
    }
    return s;
}

function countAverageTime(total, ln) {
    total = Number(total);
    d = total / ln;
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);

    var hDisplay = h > 0 ? h + " val " : "";
    var mDisplay = m > 0 ? m + " min" : "";
    return hDisplay + mDisplay; 
};