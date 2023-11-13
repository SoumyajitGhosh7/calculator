

str = localStorage.getItem('ans');

document.querySelector('#display').value = str;

function dis(c) {
    str = localStorage.getItem('ans');
    if (c == 'd') {
        str = str.slice(0, -1);
        localStorage.setItem('ans', str);
    } else
        if (c == '=') {
            str = (eval(str)).toString();
            localStorage.setItem('ans', str);
        } else
            if (c == 'AC') {
                str = '';
                localStorage.clear();
            } else
                if (str == null) {
                    str = c;
                } else
                    str = str + c;
    localStorage.setItem('ans', str);
    document.querySelector('#display').value = str;
    return str;
}

