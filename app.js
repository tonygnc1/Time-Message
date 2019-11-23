const button = document.querySelector('button');
const output = document.querySelector('.output');
button.addEventListener('click',showOutput);

function showOutput() {
    const date = new Date();
    let cur = (date.getHours());
    let message;

    if(cur>17){
        message = 'Its evening';
    } else if(cur>12) {
        message = 'Its afternoon';
    } else if (cur >8  <12) {
message = 'Its morning';
    } else if(cur<8) {
message = "We should be in bed";
    } else {
        message = 'Something is wrong';
    }
    output.innerHTML = '<h1>' + message + '</h1>';
}