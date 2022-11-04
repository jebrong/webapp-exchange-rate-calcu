let currencyEl_one = document.querySelector("#currency-one");
let amountEl_one = document.querySelector("#amount-one");
let currencyEl_two = document.querySelector("#currency-two");
let amountEl_two = document.querySelector("#amount-two");

const calculate = async () => {
  let currency_one = currencyEl_one.value;
  let currency_two = currencyEl_two.value;
  let amount_one = amountEl_one.value;
  let apiUrl = `https://v6.exchangerate-api.com/v6/da539eaacf667c72022c0528/latest/${currency_one}`;

  try {
    let res = await fetch(apiUrl);
    let apiCurrency = await res.json();

    let amount_two =
      Math.round(
        apiCurrency.conversion_rates[currency_two] * amount_one * 100
      ) / 100;

    amountEl_two.value = amount_two;
  } catch (error) {}
};

calculate();

currencyEl_one.addEventListener("change", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
