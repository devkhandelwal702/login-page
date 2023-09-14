function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (password.length<6) {
        alert("Password length should be more than 6 digits");
        return false;
    } else {
        console.log(email,'is emailId');
        console.log(password,'is password');
        return true;
    }
}