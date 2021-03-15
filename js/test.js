function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        default: 
            return 0; 
    } 
}
function set(id,cont){
    document.getElementById(id).innerText=cont;
}
function ping(url,boxname){
    http=new XMLHttpRequest();
    http.open("GET",url,false);
    http.onreadystatechange=function(){
        console.log(url+" status "+http.readyState);
        if(http.readyState==4&&http.status==200){
            console.log(url+" finished");
            setTimeout(set(boxname,"正常运行"),randomNum(100,1000));
        }
        if(http.readyState==4&&http.status!=200){
            set(boxname,"异常");
        }
    }
    http.send();
}
ping("https://mc.mirrors.tmysam.top/status.json","x1");
ping("https://mcres.mirrors.tmysam.top/status.json","x2");
ping("https://mclib.mirrors.tmysam.top/status.json","x3");