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



    $('#submit').on('click',function(event){
        event.preventDefault();        
        validateFName();
        validateLName();
        validateEmail();
        validateContact();
        validateUName();
        validatePassword();
    });


    function validateFName() {
        const input = event.target;
        const fname = input.value;
        const fnameregex = /^[A-Za-z\s]+$/;
        const isValid = fnameregex.test(fname);
        
        if (!isValid) {
            $("#fname").addClass("error-border");
            $('#fname_error').show();
            $('#fname_error').text("Enter Valid First Name!");
        } else {
            $("#fname").removeClass("error-border");
            $('#fname_error').text("");
        }
    }
    function validateLName() {
        const input = event.target;
        const lname = input.value;
        const lnameregex = /^[a-zA-Z]+$/;
        const isValid = lnameregex.test(lname);
        
        if (!isValid) {
            $("#lname").addClass("error-border");
            $('#lname_error').show();
            $('#lname_error').text("Enter Valid Last Name!");
        } else{
            $("#lname").removeClass("error-border");
            $('#lname_error').text("");
        }
    }
    function validateEmail() {
        const input = event.target;
        const email = input.value;
        const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailregex.test(email);
        
        if (!isValid) {
            $("#email").addClass("error-border");
            $('#email_error').show();
            $('#email_error').text("Enter Valid Email!");
        } else {
            $("#email").removeClass("error-border");
            $('#email_error').text("");
        }
    }
    function validateContact() {
        const input = event.target;
        const mobileno = input.value;
        const mobileregex = /^[789]\d{9}$/; 
        const isValid = mobileregex.test(mobileno);
        
    if (!isValid) {
        $("#mobileno").addClass("error-border");
        $('#mobile_error').show();
        $('#mobile_error').text("Enter Valid Mobile Number!");
    } else {
        $("#mobileno").removeClass("error-border");
        $('#mobile_error').text("");
    }
    }
    function validateUName() {
        const input = event.target;
        const uname = input.value;
        const unameregex=  /^[A-Za-z0-9]\w{2,15}$/; 
        const isValid = unameregex.test(uname);

    
    if (!isValid) {
        $("#uname").addClass("error-border");
        $('#uname_error').show();
        $('#uname_error').text("Enter Valid User Name!");
    } else {
        $("#uname").removeClass("error-border");
        $('#uname_error').text("");
    }
    }
    function validatePassword() {
        const input = event.target;
        const psw = input.value;
        const pswregex=  /^[A-Za-z0-9]\w{7,30}$/; 
        const isValid = pswregex.test(psw);
        
    if (!isValid) {
        $("#psw").addClass("error-border");
        $('#psw_error').show();
        $('#psw_error').text("Enter Valid Password!");
    } else {
        $("#psw").removeClass("error-border");
        $('#psw_error').text("");
    }
    }
});