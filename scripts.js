str=localStorage.getItem('ans');
if(str==null){
    str='';
}
document.querySelector('#display').value=str;

function dis(c){
    str=localStorage.getItem('ans');
    if(c=='d'){
        str = str.slice(0, -1);
        localStorage.setItem('ans',str);
    }else
    if(c=='='){
        str=(eval(str)).toString();
        localStorage.setItem('ans',str);
    }else
    if(c=='AC'){
        str='';
        localStorage.clear();
    }else
    str=str+c;
    localStorage.setItem('ans',str);
    document.querySelector('#display').value=str;
    return str;
}
