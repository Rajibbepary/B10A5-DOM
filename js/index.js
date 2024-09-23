


document.getElementById('donation-now').addEventListener('click', function(event){
    event.preventDefault()
    const inputValue =parseFloat(document.getElementById('input-value').value);
    const accountBalance = parseFloat(document.getElementById('account-balance').innerText);

    if(isNaN(inputValue) || inputValue < 0){
        alert('Invalid Amount Donate')
        return;
    }

  const x = document.getElementById('total-donation').innerHTML = inputValue;

  const y = accountBalance - x;
    
  document.getElementById('account-balance').innerText =  y;
   

})


// history tab function 

const historyTab = document.getElementById('History-btn');
const donationTab = document.getElementById('donation-btn');
historyTab.addEventListener('click', function(){
historyTab.classList.add('bg-[#B4F461]',
  'focus:outline-none',
  'transition-colors',
  'duration-200',
  'hover:bg-[#B4F461]',
  'font-semibold',
  'text-lg'
  
  );

donationTab.classList.remove(
'bg-[#B4F461]',
'focus:outline-none',
'transition-colors',
'duration-200',
'hover:bg-[#B4F461]',
'font-semibold'
);

document.getElementById('parent-container').classList.add('hidden')
});