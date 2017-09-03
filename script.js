function max(a,b){
//    console.log(a>b);
    if(a>b){
        return a;
    }
    
    else{
        return b;
    }
}


function lastChar(arr){
    
    return arr[arr.length-1];
}

function squares(a,b){
    return Math.pow(a,2)+Math.pow(b,2);
}


function leafYear(y){
//    console.log(y%4===0);
//    console.log(y%100!=0);
//    console.log(y%400===0);
//    
//    console.log(y%100!=0||y%400===0);
    
//    console.log(y%4===0 && yy);
    
    if(y%4===0 && (y%100!=0||y%400===0)){
        return "yes";
    }
    else{
        return "no";
    }
    
}