// Example JavaScript for additional functionality
$(document).ready(function(){
    // Initialize carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // WhatsApp popup after 5 seconds
    setTimeout(function(){
        alert("Please contact us on WhatsApp for more information!");
    }, 5000);
});
