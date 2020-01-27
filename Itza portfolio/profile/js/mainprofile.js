(function ($) {

    "use strict";


    $('.navigation').singlePageNav({
        currentClass: 'active'
    });


    $('.toggle-menu').click(function () {
        $('.responsive-menu').stop(true, true).slideToggle();
        return false;
    });
    /* ========================================================================= */
    /*   Contact Form Validating
    /* ========================================================================= */

    $('#contact-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: false,
            },
            message: {
                required: true,
            },
        },
        messages: {
            user_name: {
                required: "Please put your name!",
                minlength: "Your name must consist of at least 2 characters"
            },
            email: {
                required: "Please put your email address",
            },
            message: {
                required: "Please put some messages here",
                minlength: "Your name must consist of at least 2 characters"
            },
        },
        submitHandler: function (form) {
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "mail.php",
                success: function () {
                    $('#contact-form #success').fadeIn();
                },
                error: function () {
                    $('#contact-form #error').fadeIn();
                }
            });
        }
    });


})(jQuery);






