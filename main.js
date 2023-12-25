
function confirmEmail() {
    setTimeout(() => {
        console.log("confirmation")
    var signUpCard = document.getElementsByClassName('sign-up-container')[0];
    var confirmationMessage = document.getElementsByClassName('confirmation-message-container')[0];
    var email = document.getElementById("email").value;
    var successText = document.getElementById("success-message");
    successText.innerHTML = email;
    signUpCard.style.display = 'none';
    confirmationMessage.style.display = 'flex';
    var signUpForm = document.getElementsByClassName("email-submit-section")[0];
    signUpForm.reset();
    }, "200")
}

function dismissMessage() {
    setTimeout(() => {
        var signUpCard = document.getElementsByClassName('sign-up-container')[0];
    var confirmationMessage = document.getElementsByClassName('confirmation-message-container')[0];
    signUpCard.style.display = 'grid';
    confirmationMessage.style.display = 'none';
    }, "200")
}

