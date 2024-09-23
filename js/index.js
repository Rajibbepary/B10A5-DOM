


document.getElementById('donation-now').addEventListener('click', function(event){
    event.preventDefault()
    const inputValue =parseFloat(document.getElementById('input-value').value);
    const accountBalance = parseFloat(document.getElementById('account-balance').innerText);

    if(isNaN(inputValue) || inputValue < 0){
        alert('Invalid Amount Donate')
        return;
    }

  const x = document.getElementById('total-donation').innerHTML = inputValue;

const historyItem = document.createElement("div");
historyItem.className = "bg-slate-100 drop-shadow-md mt-24 p-10 rounded-md border-l-2 border-r-2 border-black w-9/12 text-center m-auto";

historyItem.innerHTML = `

<h2 class="text-black lg:text-2xl font-semibold">${x} Taka is a Donated for Flood at Noakhali, Bangladesh 2024</h2>
<p class="mt-5">Date:${new Date()}</p>

`
const HistoryContainer = document.getElementById("History-list-container");
HistoryContainer.insertBefore(historyItem, HistoryContainer.firstChild);



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

document.getElementById('History-list-container').classList.remove('hidden');
});

//donationTab class remove funf

donationTab.addEventListener('click', function(){
donationTab.classList.add('bg-[#B4F461]',
    'focus:outline-none',
    'transition-colors',
    'duration-200',
    'hover:bg-[#B4F461]',
    'font-semibold',
    'text-lg'
    
    );
  
  historyTab.classList.remove(
  'bg-[#B4F461]',
  'focus:outline-none',
  'transition-colors',
  'duration-200',
  'hover:bg-[#B4F461]',
  'font-semibold'
  );
  
  
  document.getElementById('parent-container').classList.remove('hidden')
  
  document.getElementById('History-list-container').classList.add('hidden');
  });


  