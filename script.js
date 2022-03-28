function clock(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var meridium = "am";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        meridium = "pm";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + meridium;
    document.getElementById("time").innerHTML = time;
    setTimeout(clock, 1000);
    
}
 
window.onload = clock();