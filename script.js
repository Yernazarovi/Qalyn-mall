function check() {
    let education = document.getElementById("education");
    let capital = document.getElementById("capital");
    let skills = document.getElementsByClassName('skills')
    let result = document.getElementById('Result');
    let btnShow = document.querySelector("button");
    let sum = 500;
    sum *= education.value * capital.value
    for (i = 0; i < 4; i++) {
        if (skills[i].checked === true) {
            sum += parseInt(skills[i].value);
        }
    }
    for (i = 0; i < 3; i++) {
        let repas = 'repa'+i;
        let age = 'age'+i;
        let reputation = document.getElementById(repas);
        let ages = document.getElementById(age);
        if (reputation.checked === true) {
            if (reputation.value !== "200") {
                sum *= Number(reputation.value);
            } else {
                sum -= Number(reputation.value);
            }
        }
        if (ages.checked === true) {
            sum *= Number(ages.value);
        }
    }
    result.innerText = sum + "$";
};
