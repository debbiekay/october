const myNamneinput = document.getElementById("deb")
const outputText = document.getElementById("outputText");
const rotateText = document.getElementById("rotateText")
const inputForm = document.getElementById("inputForm")


const button = document.getElementById("myButton");
// // button.onclick = function() {
// //     outputText = welcomeNote;
    
// // }

// button.addEventListener('click', () => {

//     outputText.innerHTML = "Hi" + enteredName + "welcome to the month of october, a mounth of bounty.<br> Happy independent day celebration"
//     rotateText.classList.add('hidden');


button.addEventListener('click', () => {
    event.preventDefault();
    const enteredName = myNamneinput.value;

    if (enteredName) {
        outputText.innerHTML = "Hi " + enteredName + ", welcome to the month of October, a month of bounty.<br> Happy Independence Day celebration";
        rotateText.classList.add('hidden');
        inputForm.style.display = "none"; // Hide the form
    } else {
        outputText.innerHTML = "Please enter your name.";
    }
});