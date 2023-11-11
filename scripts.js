let str='';
function dis(c){
    if(c=='d'){
        str = str.slice(0, -1);
    }else
    if(c=='='){
        str=(eval(str)).toString();
    }else
    if(c=='AC'){
        str='';
    }else
    str=str+c;
    document.querySelector('#display').value=str;
    return str;
}