$(document).ready(function(){
    
    $('#fname').on('blur', function() {
        validateFName();
    }).on('focus', function() {
        $('#fname_error').hide();
    });
    $('#lname').on('blur', function() {
        validateLName();
    }).on('focus', function() {
        $('#lname_error').hide();
    });
    $('#email').on('blur', function() {
        validateEmail();
    }).on('focus', function() {
        $('#email_error').hide();
    });
    $('#mobileno').on('blur', function() {
        validateContact();
    }).on('focus', function() {
        $('#mobile_error').hide();
    });
    $('#uname').on('blur', function() {
        validateUName();
    }).on('focus', function() {
        $('#uname_error').hide();
    });
    $('#psw').on('blur', function() {
        validatePassword();
    }).on('focus', function() {
        $('#psw_error').hide();
    });

    $('#submit').on('click', function(event) {
        event.preventDefault();
        validateFName();
        validateLName();
        validateEmail();
        validateContact();
        validateUName();
        validatePassword();
    });
    
    function validateFName() {
        const input = $('#fname');
        const fname = input.val();
        const fnameregex = /^[A-Za-z\s]+$/;
        const isValid = fnameregex.test(fname);
        if(fname === ''){
            input.addClass("error-border");
            $('#fname_error').show();
            $('#fname_error').text("*This Fiels is Required !!");
        } else if (!isValid) {
            input.addClass("error-border");
            $('#fname_error').show();
            $('#fname_error').text("Enter Valid First Name!");
        } else {
            input.removeClass("error-border");
            $('#fname_error').text("");
        }
    }

    function validateLName() {
        const input = $('#lname');
        const lname = input.val();
        const lnameregex = /^[a-zA-Z]+$/;
        const isValid = lnameregex.test(lname);
        
        if(lname === ''){
            input.addClass("error-border");
            $('#lname_error').show();
            $('#lname_error').text("*This Fiels is Required !!");
        } else if (!isValid) {
            input.addClass("error-border");
            $('#lname_error').show();
            $('#lname_error').text("Enter Valid Last Name!");
        } else {
            input.removeClass("error-border");
            $('#lname_error').text("");
        }
    }
    
    function validateEmail() {
        const input = $('#email');
        const email = input.val();
        const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailregex.test(email);
        
        if(email === ''){
            input.addClass("error-border");
            $('#email_error').show();
            $('#email_error').text("*This Fiels is Required !!");
        } else if (!isValid) {
            input.addClass("error-border");
            $('#email_error').show();
            $('#email_error').text("Enter Valid Email!");
        } else {
            input.removeClass("error-border");
            $('#email_error').text("");
        }
    }
    
    function validateContact() {
        const input = $('#mobileno');
        const mobileno = input.val();
        const mobileregex = /^[789]\d{9}$/;
        const isValid = mobileregex.test(mobileno);

        if(mobileno === ''){
            input.addClass("error-border");
            $('#mobile_error').show();
            $('#mobile_error').text("*This Fiels is Required !!");
        } else if (!isValid) {
            input.addClass("error-border");
            $('#mobile_error').show();
            $('#mobile_error').text("Enter Valid Mobile Number!");
        } else {
            input.removeClass("error-border");
            $('#mobile_error').text("");
        }
    }

    function validateUName() {
        const input = $('#uname');
        const uname = input.val();
        const unameregex = /^[A-Za-z0-9]\w{2,15}$/;
        const isValid = unameregex.test(uname);
        
        if(uname === ''){
            input.addClass("error-border");
            $('#uname_error').show();
            $('#uname_error').text("*This Fiels is Required !!");
        } else if (!isValid) {
            input.addClass("error-border");
            $('#uname_error').show();
            $('#uname_error').text("Enter Valid User Name!");
        } else {
            input.removeClass("error-border");
            $('#uname_error').text("");
        }
    }

    function validatePassword() {
        const input = $('#psw');
        const psw = input.val();
        const pswregex = /^[A-Za-z0-9]\w{7,30}$/;
        const isValid = pswregex.test(psw);
        
        if(psw === ''){
            input.addClass("error-border");
            $('#psw_error').show();
            $('#psw_error').text("*This Fiels is Required !!");
        } else if (!isValid) {
            input.addClass("error-border");
            $('#psw_error').show();
            $('#psw_error').text("Enter Valid Password!");
        } else {
            input.removeClass("error-border");
            $('#psw_error').text("");
        }
    }
});