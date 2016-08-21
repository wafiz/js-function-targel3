function detect() {
	  var i=0,x=0,y;
	d=document.getElementById("t1").value;
	e=document.getElementById("t2").value;

    var str = d;
    var res = str.split("");
    while (res[i]===e) {
      x=x+1;
        i++;
    }
    document.getElementById("test").innerHTML = x;
    
}
x=0;