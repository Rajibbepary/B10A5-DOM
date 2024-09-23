

document.getElementById('donation-now').addEventListener('click', function(event){


    event.preventDefault()

    const inputValue =parseFloat(document.getElementById('input-value').value);

    const accountBalance = parseFloat(document.getElementById('account-balance').innerText)

    console.log(accountBalance)

    if(isNaN(inputValue)){
        alert('Fail to mony')
        return;
    }

  const x = document.getElementById('total-donation').innerHTML = inputValue;

  const y = accountBalance - x;
  document.getElementById('account-balance').innerHTML = y;
   // const totalDonation = accountBalance - totalDonation;

    console.log(inputValue);

})