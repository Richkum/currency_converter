const day = document.getElementById("day");
const date = document.getElementById("date");
const month = document.getElementById("month");
const fromCurrency = document.querySelector("#select");
const toCurrency = document.querySelector("#select2");
const inpField = document.querySelector("#inp-field");
const inpField2 = document.querySelector("#inp-field2");

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sartuday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const today = new Date();

day.innerHTML = weekdays[today.getDay()] + ",";
date.innerHTML = today.getDate() + "/";
month.innerHTML = months[today.getMonth()];

const url = "https://restcountries.com/v3.1/all";
const api =
  "https://v6.exchangerate-api.com/v6/1c7c394597743d01ef322275/latest/USD";

async function getApi() {
  const response = await fetch(api);
  const data = await response.json();
  const info = data.conversion_rates;
  console.log(info);
}
getApi();

async function getUrl() {
  const response = await fetch(url);
  const data = await response.json();
  const filterr = data.filter((item) => "flag" in item);
  console.log(filterr);

  filterr.forEach((element) => {
    fromCurrency.innerHTML += `
    <select name="from_currency" id="select">
            <option>${Object.keys(element.currencies)[0]}
            - ${element.name.common}-${element.flag}</option>
          </select>
    `;
    toCurrency.innerHTML += `
    <select name="from_currency" id="select2">
    <option>${Object.keys(element.currencies)[0]}
    - ${element.name.common}-${element.flag}</option>
  </select>
    `;
  });
}
getUrl();

function convertCurrency(amount, fromCurrency, toCurrency) {
  // Replace this object with your actual exchange rates

  // Check if the currencies are valid
  if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
    throw new Error("Invalid currency code");
  }

  // Check if the amount is a valid number
  if (isNaN(amount)) {
    throw new Error("Invalid amount");
  }

  // Perform the conversion
  const rate = exchangeRates[fromCurrency][toCurrency];
  const convertedAmount = amount * rate;

  return convertedAmount.toFixed(2); // Return the result with two decimal places
}
