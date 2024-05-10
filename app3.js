document.addEventListener("DOMContentLoaded", function() {
  const balanceInput = document.getElementById('balance');
  const depositInput = document.getElementById('deposit');
  const withdrawInput = document.getElementById('withdrawal');
  const depositButton = document.querySelector('.btn-deposit');
  const withdrawButton = document.querySelector('.btn-withdraw');
  const transferInput=document.getElementById('transfer');
  const transferButton=document.querySelector('.transfer-btn');
  const accountNumberInput = document.getElementById('accountNumber');
  const storedUsername = localStorage.getItem('name');
  const userNameDiv = document.getElementById('userName');
  userNameDiv.textContent = storedUsername;
  
  // Initialize balance
  let balance = 0;
  updateBalance();

  // Function to update balance input
  function updateBalance() {
      balanceInput.value = `$${balance}`;
  }

  // Event listener for deposit button
  depositButton.addEventListener('click', function() {
      const depositAmount = parseFloat(depositInput.value);
      if (!isNaN(depositAmount) && depositAmount > 0) {
          balance += depositAmount;
          alert("your A/C 00550**** has been credit"+" "+"$"+depositAmount);
          updateBalance();
          // Reset deposit input field
          depositInput.value = '';
      }
  });

// Transfer-btn
transferButton.addEventListener('click',function(){
  const transferAmount=parseFloat(transferInput.value);
  const accountNumber = accountNumberInput.value;
  if(!isNaN(transferAmount)&&transferAmount>0&&transferAmount<=balance){
    balance-=transferAmount;
    alert("your have successfully sent"+  " "+   "$"+transferAmount+" "+ "to this A/C"+" "+accountNumber);
          updateBalance();
          transferInput.value='';
          accountNumberInput.value='';

  }
  else{
    alert("insufficient funds!");
  }
  

})


  // Event listener for withdraw button
  withdrawButton.addEventListener('click', function() {
      const withdrawAmount = parseFloat(withdrawInput.value);
      if (!isNaN(withdrawAmount) && withdrawAmount > 0 && balance >= withdrawAmount) {
          balance -= withdrawAmount;
          alert("your A/C 00550**** has been debit"+" "+"$"+withdrawAmount);
          updateBalance();
          // Reset withdraw input field
          withdrawInput.value = '';
      } else {
          alert("Insufficient funds or invalid amount!");
      }
  });
});
