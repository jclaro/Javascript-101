// http://www.portugalstartupjobs.pt/

// Alterar o padding do botão I’M A STARTUP para 20px

// getElement(s)By?
// previousSibling
// childNodes


var buttons = document.getElementsByClassName('buttons');
var jobseeker = buttons.childNodes[3];
// var startup = jobseeker.previousElementSibling;
var startups = jobseeker.previousSibling.previousSibling;
startup.firstChild.style.padding = '20px';