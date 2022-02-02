const btnIncrease = document.querySelector(".btn-increase");
const btnReset = document.querySelector(".btn-reset");
const btnDecrease = document.querySelector(".btn-decrease");
const valueCounter = document.querySelector(".value-counter");

btnIncrease.addEventListener("click", function() {
    let valueNumberConunter = Number(valueCounter.textContent);

    console.log(valueNumberConunter);

    let newNumber = valueNumberConunter + 1;

    document.querySelector(".value-counter").textContent = newNumber;

    document.querySelector(".value-counter").style.color = "#009432";
});

btnReset.addEventListener("click", function() {
    document.querySelector(".value-counter").textContent = "0";

    document.querySelector(".value-counter").style.color = "#130f40";
});

btnDecrease.addEventListener("click", function() {
    let valueNumberConunter = Number(valueCounter.textContent);

    console.log(valueNumberConunter);

    let newNumber = valueNumberConunter - 1;

    document.querySelector(".value-counter").textContent = newNumber;

    document.querySelector(".value-counter").style.color = "#EA2027";
});