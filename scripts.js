//create count in the database
if (localStorage.getItem("count") == null) {
	localStorage.setItem("count",0);
}

//updathe the HTML to reflect the database
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}

update()

//add one to count
function plusOne() {
	localStorage.setItem("count",Number(localStorage.getItem("count"))+1);
	update();
}

//reset the count
function reset() {
  	if (confirm("Are you sure you ant to reset?")) {
    	localStorage.setItem("count",0);
    	update();
  	}
 }