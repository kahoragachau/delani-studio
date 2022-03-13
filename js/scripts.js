$(document).ready(function(){
    $('.design-icon').click(function(){
        $('.design-icon').hide();
        $('.design-text').show();
    });
    $('.design-text').click(function(){
        $('.design-icon').toggle();
        $('.design-text').toggle();
    });
    $('.dev-icon').click(function(){
        $('.dev-icon').hide();
        $('.dev-text').show();
    });
    $('.dev-text').click(function(){
        $('.dev-icon').toggle();
        $('.dev-text').toggle();
    })
    $('.product-icon').click(function(){
        $('.product-icon').hide();
        $('.product-text').show();
    });
    $('.product-text').click(function(){
        $('.product-text').toggle();
        $('.product-icon').toggle();

    });
    $('.work1').hover(function(){
        $('#black').css('opacity',1).fadeIn(2000);
    }, function(){
        $('#black').css('opacity',0).fadeOut();
    });
    $('.work2').hover(function(){
        $('#mighty-ontario').css({'opacity':1, "background-color": "grey"}).fadeIn(2000);
    }, function(){
        $('#mighty-ontario').css('opacity',0).fadeOut();
    });
    $('.work3').hover(function(){
        $('#orange-oblisque').css({'opacity':1, "background-color": "grey"}).fadeIn(2000);
    }, function(){
        $('#orange-oblisque').css('opacity',0).fadeOut();
    });
    $('.work4').hover(function(){
        $('#brave').css({'opacity':1, "background-color": "grey"}).fadeIn(2000);
    }, function(){
        $('#brave').css('opacity',0).fadeOut();
    });
    $('.work5').hover(function(){
        $('#portofolio').css({'opacity':1, "background-color": "grey"}).fadeIn(2000);
    }, function(){
        $('#portofolio').css('opacity',0).fadeOut();
    });
    $('.work6').hover(function(){
        $('#dashboard').css({'opacity':1, "background-color": "grey"}).fadeIn(2000);
    }, function(){
        $('#dashboard').css('opacity',0).fadeOut();
    });
    $('.work7').hover(function(){
        $('#burner').css({'opacity':1, "background-color": "grey"}).fadeIn(2000);
    }, function(){
        $('#burner').css('opacity',0).fadeOut();
    });
    $('.work8').hover(function(){
        $('#giraffe').css({'opacity':1, "background-color": "grey"}).fadeIn(2000);
    }, function(){
        $('#giraffe').css('opacity',0).fadeOut();
    });
});

let submitButton = document.getElementById('submit');
submitButton.addEventListener("click", sendEmail);

function sendEmail(){
    let nameInput = document.getElementById("input_name").value;
    let emailInput = document.getElementById("email_input").value;
    let messageInput = document.getElementById("message").value;
    if(nameInput !== "" && emailInput!=="" && messageInput !== ""){
        alert(nameInput + " Your message is well received");
    }else{
        alert("Inputs Cant be empty");
    }
}