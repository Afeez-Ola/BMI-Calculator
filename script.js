function bmiCalculator() {
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    let sqrtHeight = Math.round(Math.pow(height, 2));

    let result = Math.round(weight / sqrtHeight);
    let output = document.querySelector('.result');

    if (result < 18.5) {
        output.innerHTML = result + ' - Underweight';
    } else if (result < 25) {
        output.innerHTML = result + ' - Normal weight';
    } else if (result < 30) {
        output.innerHTML = result + ' - Pre-obesity';
    } else if (result < 35) {
        output.innerHTML = result + ' - Obesity class I';
    } else if (result < 40) {
        output.innerHTML = result + ' - Obesity class II';
    } else {
        output.innerHTML = result + ' - Obesity class III';
    }
    return false;
}
