var q = 0;

function clickmeboy() {
    q = q + 1;
    document.getElementById("pedestal").innerHTML = q;
}

var si = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("miniclock").innerHTML = d.toLocaleTimeString();
} 