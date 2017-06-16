const balanceUrl = '/ethereum/balance'
const form = document.getElementsByName('wallet')[0];
const walletId = document.getElementsByName('wallet-address')[0];
const outBalance = document.getElementById('balance-value');

if (form && walletId) {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    axios.get(`${balanceUrl}/${walletId.value}`)
      .then(response => {
        outBalance.innerText = `Your balance is ${response.data.balance} Eth`;
      })
      .catch(error => {
        outBalance.innerText = "Error. Try again later";
      })
  });
} else {
  console.warn("some error")
}
