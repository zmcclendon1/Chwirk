function toggleForgotPassword() {
//Defines
    let securityQuestionOne = document.getElementById("secquest1");
    let securityQuestionTwo = document.getElementById("secquest2");
    securityQuestionOne.classList.toggle("hidden");
    securityQuestionTwo.classList.toggle("hidden");
}