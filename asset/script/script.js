const day = document.getElementById("day");
const date = document.getElementById("date");
const month = document.getElementById("month");

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

fetch("https://v6.exchangerate-api.com/v6/1c7c394597743d01ef322275/latest/USD")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let authors = data.conversion_rates;
    console.log(authors);
  });

const exchangeRates = {
  USD: 1,
  AED: 3.6725,
  AFN: 70.562,
  ALL: 95.6919,
  AMD: 401.6684,
  ANG: 1.79,
  AOA: 834.0937,
  ARS: 356.03,
  AUD: 1.524,
  AWG: 1.79,
  AZN: 1.7001,
  BAM: 1.79,
  BBD: 2,
  BDT: 110.5923,
  BGN: 1.7895,
  BHD: 0.376,
  BIF: 2839.4633,
  BMD: 1,
  BND: 1.3373,
  BOB: 6.8044,
  BRL: 4.8674,
  BSD: 1,
  BTN: 83.3236,
  BWP: 13.4816,
  BYN: 3.127,
  BZD: 2,
  CAD: 1.3703,
  CDF: 2481.7315,
  CHF: 0.8833,
  CLP: 880.6936,
  CNY: 7.1391,
  COP: 4020.9494,
  CRC: 522.5292,
  CUP: 24,
  CVE: 100.9146,
  CZK: 22.4244,
  DJF: 177.721,
  DKK: 6.8287,
  DOP: 55.9308,
  DZD: 132.9867,
  EGP: 30.9351,
  ERN: 15,
  ETB: 55.9759,
  EUR: 0.9151,
  FJD: 2.2299,
  FKP: 0.7975,
  FOK: 6.8287,
  GBP: 0.7975,
  GEL: 2.7003,
  GGP: 0.7975,
  GHS: 12.0513,
  GIP: 0.7975,
  GMD: 65.6628,
  GNF: 8577.4794,
  GTQ: 7.702,
  GYD: 209.2245,
  HKD: 7.7958,
  HNL: 24.285,
  HRK: 6.8956,
  HTG: 132.5762,
  HUF: 347.7968,
  IDR: 15452.3881,
  ILS: 3.7173,
  IMP: 0.7975,
  INR: 83.3182,
  IQD: 1310.5228,
  IRR: 41970.0908,
  ISK: 139.2401,
  JEP: 0.7975,
  JMD: 155.7106,
  JOD: 0.709,
  JPY: 147.9341,
  KES: 153.3496,
  KGS: 89.0953,
  KHR: 4106.4762,
  KID: 1.524,
  KMF: 450.2492,
  KRW: 1293.451,
  KWD: 0.3078,
  KYD: 0.8333,
  KZT: 459.1723,
  LAK: 20263.2475,
  LBP: 15000,
  LKR: 328.7934,
  LRD: 187.506,
  LSL: 18.4863,
  LYD: 4.8232,
  MAD: 10.1135,
  MDL: 17.7657,
  MGA: 4507.4319,
  MKD: 56.2829,
  MMK: 2062.2661,
  MNT: 3494.9374,
  MOP: 8.0293,
  MRU: 39.6889,
  MUR: 43.8967,
  MVR: 15.436,
  MWK: 1692.5408,
  MXN: 17.1885,
  MYR: 4.6525,
  MZN: 63.8857,
  NAD: 18.4863,
  NGN: 792.6131,
  NIO: 35.9867,
  NOK: 10.6659,
  NPR: 133.3177,
  NZD: 1.651,
  OMR: 0.3845,
  PAB: 1,
  PEN: 3.7386,
  PGK: 3.6552,
  PHP: 55.3786,
  PKR: 288.176,
  PLN: 3.9954,
  PYG: 7346.5884,
  QAR: 3.64,
  RON: 4.5422,
  RSD: 107.1451,
  RUB: 88.2666,
  RWF: 1273.2003,
  SAR: 3.75,
  SBD: 8.5084,
  SCR: 13.1774,
  SDG: 549.1355,
  SEK: 10.4437,
  SGD: 1.3371,
  SHP: 0.7975,
  SLE: 22.2309,
  SLL: 22230.9299,
  SOS: 571.3908,
  SRD: 38.3865,
  SSP: 1070.046,
  STN: 22.4224,
  SYP: 12692.2096,
  SZL: 18.4863,
  THB: 35.1526,
  TJS: 10.9304,
  TMT: 3.5001,
  TND: 3.1034,
  TOP: 2.3555,
  TRY: 28.7857,
  TTD: 6.708,
  TVD: 1.524,
  TWD: 31.3012,
  TZS: 2510.1187,
  UAH: 36.0586,
  UGX: 3776.2385,
  UYU: 39.0764,
  UZS: 12295.828,
  VES: 35.4186,
  VND: 24082.5155,
  VUV: 120.065,
  WST: 2.7274,
  XAF: 600.3322,
  XCD: 2.7,
  XDR: 0.7505,
  XOF: 600.3322,
  XPF: 109.2127,
  YER: 246.0217,
  ZAR: 18.4881,
  ZMW: 23.3039,
  ZWL: 5762.0302,
  // Add more currencies as needed
};

const selectFrom = document.getElementById("select");
const selectTo = document.getElementById("select2");

for (let currency in exchangeRates) {
  const option1 = document.createElement("option");
  option1.value = currency;
  option1.textContent = currency;

  const option2 = document.createElement("option");
  option2.value = currency;
  option2.textContent = currency;

  selectFrom.appendChild(option1);
  selectTo.appendChild(option2);
}

function convertCurrency(direction) {
  const amountFrom = parseFloat(document.getElementById("inp-field").value);
  const amountTo = parseFloat(document.getElementById("inp-field2").value);
  const fromCurrency = document.getElementById("select").value;
  const toCurrency = document.getElementById("select2").value;

  if (direction === "from") {
    if (
      !isNaN(amountFrom) &&
      fromCurrency !== "Select a Currency" &&
      toCurrency !== "Select a Currency"
    ) {
      const rate = exchangeRates[fromCurrency] / exchangeRates[toCurrency];
      const convertedAmount = (amountFrom * rate).toFixed(2);
      document.getElementById("inp-field2").value = convertedAmount;
    }
  } else if (direction === "to") {
    if (
      !isNaN(amountTo) &&
      fromCurrency !== "Select a Currency" &&
      toCurrency !== "Select a Currency"
    ) {
      const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
      const convertedAmount = (amountTo * rate).toFixed(2);
      document.getElementById("inp-field").value = convertedAmount;
    }
  }
}
