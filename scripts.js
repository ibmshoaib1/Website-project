$(document).ready(function(){
    // Initialize carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Show popup after 5 seconds
    setTimeout(function(){
        $('#userDataModal').modal('show');
    }, 5000);

    // Handle form submission
    $('#userDataForm').on('submit', function(e){
        e.preventDefault();
        const userName = $('#userName').val();
        const userEmail = $('#userEmail').val();
        const userPhone = $('#userPhone').val();

        // Send data to server or store locally
        console.log({ userName, userEmail, userPhone });

        // Close modal
        $('#userDataModal').modal('hide');
        alert('Thank you for submitting your details!');
    });
});
