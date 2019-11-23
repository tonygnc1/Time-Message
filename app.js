const button = document.querySelector('button');
const output = document.querySelector('.output');
output.setAttribute('style', 'color:white; width:225px; height:75px; text-align:center')
button.addEventListener('click', showOutput);

function showOutput() {
    const date = new Date();
    let cur = (date.getHours());
    let message;

    if (cur > 17) {
        message = 'Its evening';
        output.style.backgroundColor = 'yellow';

    } else if (cur > 12) {
        message = 'Its afternoon';
        output.style.backgroundColor = 'blue';

    } else if (cur > 8 < 12) {
        message = 'Its morning';
        output.style.backgroundColor = 'aqua';

    } else if (cur < 8) {
        message = "We should be in bed";
        output.style.backgroundColor = 'red';

    } else {
        message = 'Something is wrong';
        output.style.backgroundColor = 'orange';

    }
    output.innerHTML = '<h1>' + message + '</h1>';
}