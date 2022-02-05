export default function fetchBitcoin(url, target) {
  fetch(url)
    .then(response => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    // eslint-disable-next-line no-console
    }).catch(erro => console.log(Error(erro)));
}
