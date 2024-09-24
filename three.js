

document.getElementById('donation-now-3').addEventListener('click', function(){

    const inputValue = parseFloat(document.getElementById('input-value-3').value);
    
    const accountBalance =parseFloat(document.getElementById("account-balance").innerText) 
    
    
    if(isNaN(inputValue) || inputValue < 0){
        alert('Invalid Amount Donate')
        return;
    }
    
    const x = document.getElementById('total-donation-3').innerHTML = inputValue;
    
    const y = accountBalance - x;
        
      document.getElementById('account-balance').innerText =  y;
    
      const historyItem = document.createElement("div");
    historyItem.className = "bg-slate-100 drop-shadow-md mt-24 p-10 rounded-md border-l-2 border-r-2 border-black w-9/12 text-center m-auto";
    
    historyItem.innerHTML = `
    
    <h2 class="text-black lg:text-2xl font-semibold">${x} Taka is a Donated for Flood at Noakhali, Bangladesh 2024</h2>
    <p class="mt-5">Date:${new Date()}</p>
    
    `
    const HistoryContainer = document.getElementById("History-list-container");
    HistoryContainer.insertBefore(historyItem, HistoryContainer.firstChild);
    
    
    
    });
    
    console.log('hello');