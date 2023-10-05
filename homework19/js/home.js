$(document).ready(function() {
    console.log('JavaScript code is running.');

    // Add a hover event listener to elements with the class "page-button"
    $('.page-button').hover(
        function() {
            console.log('Mouse entered the element.');
            $(this).css('background-color', 'blue');
        },
        function() {
            console.log('Mouse left the element.');
            $(this).css('background-color', ''); 
        }
    );

    $('header ul a').hover(
        function() {
            $(this).css('font-weight', 'bold'); 
            $(this).css('color', 'yellow'); 
        },
        function() {
            $(this).css('font-weight', 'normal'); 
            $(this).css('color', ''); 
        }
    );
});

$(document).ready(function() {
    console.log('JavaScript code is running.');
    $('header img').hover(
        function() {
            $(this).addClass('bounce');
        },
        function() {
            $(this).removeClass('bounce');
        }
    );
});

document.addEventListener('DOMContentLoaded', function() {
    const animatedText = document.querySelector('.animated-text');
    if (animatedText) {
        animatedText.style.animation = 'fadeInUp 1s forwards';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const animatedText = document.querySelector('.animated-text');
    if (animatedText) {
        animatedText.style.animation = 'fadeInUp 1s forwards';
    }
});















