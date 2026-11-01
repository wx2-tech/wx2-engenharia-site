$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "Digite a resposta correta.");
   

    $('#success-message').hide()
    $('#error-message').hide()

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                },
                subject: {
                    required: true,
                },
                phone: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                }
            },
            messages: {
                name: {
                    required: "Digite o seu nome",
                    minlength: "Digite o seu nome"
                },
                subject: {
                    required: "Digite o assunto da mensagem",
                    minlength: "O assunto deve ter pelo menos 4 caracteres."
                },
                phone: {
                    required: "Digite seu telefone",
                    minlength: "Digite um telefone válido"
                },
                email: {
                    required: "Digite o seu e-mail"
                },
                message: {
                    required: "Digite a mensagem",
                    minlength: "Digite uma mensagem com pelo menos 4 caracteres."
                }
            },
            submitHandler: function(form) {
                emailjs.sendForm('service_hbiwhag', 'template_n6ezkad', form)
                    .then(function() {
                        window.location.href="obrigado.html"
                        $('#success-message').fadeIn()
                        
                    }, function(error) {
                        $('#contactForm').fadeOut()
                        $('#error-message').fadeIn()
                        document.body.scrollTop = 0; // For Safari
                        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera                        
                    });                 
            }
        })
    })
        
 })(jQuery)
})
