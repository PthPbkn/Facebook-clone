$(document).ready(function(){

    $("#signupForm").validate({
        rules:{
            fName:{
                required: true,
                minlength: 3
            },
            lName:{
                required: true,
                minlength:4
            },
            email:{
                required:true,
                email:true
            },
            Password:{
                required:true,
                minlength:6
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            }
        }
        
    })
})