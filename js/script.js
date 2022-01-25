var fname = document.getElementById("fname")
var fname_err = document.getElementById("fname_err")

var mail = document.getElementById("mail")
var mail_err = document.getElementById("mail_err")
var mail_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

var pass = document.getElementById("pass")
var pass_err = document.getElementById("pass_err")
pass_regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

var cpass = document.getElementById("cpass")
var cpass_err = document.getElementById("cpass_err")

function sub(){
    if( fname.value == ''){
        fname_err.innerHTML = "enter your name"
        fname.style.border = "1px solid red"
        fname.focus()
        return false
    }
    else if( mail.value == ''){
        mail_err.innerHTML = "enter your email"
        mail.style.border = "1px solid red"
        mail.focus()
        return false
    }
    else if(!mail_regex.test(mail.value)){
        mail_err.innerHTML = "enter your correct email"
        mail.style.border = "1px solid red"
        mail.focus()
        return false
    }
    else if( pass.value == ''){
        pass_err.innerHTML = "enter your password"
        pass.style.border = "1px solid red"
        pass.focus()
        return false
    }
    else if(!pass_regex.test(pass.value)){
        pass_err.innerHTML = "enter minimum 6 digit and special cheracter"
        pass.style.border = "1px solid red"
        pass.focus()
        return false
    }

    else if( cpass.value != pass.value){
        cpass_err.innerHTML = "password dosn't match"
        cpass.style.border = "1px solid red"
        cpass.focus()
        return false
    }
}

function passshow(){
    var x = document.getElementById("pass")
    if( x.type == "password"){
        x.type = "text"
    }
    else{
        x.type = "password"
    }
    
}

function valid(){
    if( fname.value != ''){
        fname_err.innerHTML = ""
        fname.style.border = "1px solid green"
    }
    if( mail.value != ''){
        mail_err.innerHTML = ""
        mail.style.border = "1px solid green"
    }
    if( pass.value == ''){
        pass_err.innerHTML = ""
        pass.style.border = "1px solid green"
    }
}
fname.addEventListener('blur',valid)
mail.addEventListener('blur',valid)
pass.addEventListener('blur',valid)