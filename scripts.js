const int = setInterval(start,100);

function start(){
    var s = document.getElementById("s").value;
    var m = document.getElementById("m").value;
    var h = document.getElementById("h").value;
    s-- ;
    var formate ="PM"
    if(s==0){
        s=10;
        m--;
        if(m==0){
            m=10;
            h--;
            if(h==24){
                h=0;
                m=0;
                s=0;
                stop();
                formate = "AM";
            }
            
            }
        }

    document.getElementById("s").value=s;
    document.getElementById("m").value=m;
    document.getElementById("h").value=h;
    document.getElementById("f").value=formate;
}

function stop(){
    clearInterval(int);
}

