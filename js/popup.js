// document.addEventListener("DOMContentLoaded", function() {
//     const orderButton = document.querySelector('.cost-of-setup-button');
//     const popupForm = document.getElementById('popupForm');
//     const submitFormButton = document.getElementById('submitForm');
//     const successContainer = document.getElementById('successContainer');
//     const closeSuccessButton = document.getElementById('closeSuccess');

//     orderButton.addEventListener('click', function() {
//         popupForm.style.display = 'block';
//     });

//     submitFormButton.addEventListener('click', function() {
//         popupForm.style.display = 'none';
//         successContainer.style.display = 'block';
//     });

//     closeSuccessButton.addEventListener('click', function() {
//         successContainer.style.display = 'none';
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const orderButtons = document.querySelectorAll('.orderButton');
    const popupForm = document.getElementById('popupForm');
    const submitFormButton = document.getElementById('submitForm');
    const successContainer = document.getElementById('successContainer');
    const closeSuccessButton = document.getElementById('closeSuccess');

    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            popupForm.style.display = 'block';
        });
    });

    submitFormButton.addEventListener('click', function() {
        popupForm.style.display = 'none';
        successContainer.style.display = 'block';
    });

    closeSuccessButton.addEventListener('click', function() {
        successContainer.style.display = 'none';
    });
});
