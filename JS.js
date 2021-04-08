let usename =prompt("Nhap tai khoan");
if (usename == "Admin") {
    let pass = prompt("Nhap mat khau")
    if (pass == null) {
        alert("cancled")
    } if (pass=='The Master'){
        alert("welcome")
    } else {
        alert("Wrong passworld")
    }
} else if (usename == null) {
        alert("cancled")
    }else {
    alert('Sai ID')
}

