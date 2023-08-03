document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search_input');
    const packageCards = document.getElementsByClassName('package_card');
  
    searchInput.addEventListener('input', function () {
      const query = searchInput.value.toLowerCase();
  
      for (const packageCard of packageCards) {
        const packageName = packageCard.querySelector('h2').textContent.toLowerCase();
        const packageDescription = packageCard.querySelector('p').textContent.toLowerCase();
        const isMatch = packageName.includes(query) || packageDescription.includes(query);
  
        packageCard.style.display = isMatch ? 'block' : 'none';
      }
    });
  });

const detailsButton=document.querySelectorAll(".btn");

  
  detailsButton.addEventListener("click",showDetails());
  
  function showDetails(){
    let cardDetails=document.querySelectorAll(".card_details");
    
      if(cardDetails.style.visibility==="hidden")cardDetails.style.visibility="visible";
      else cardDetails.style.visibility="hidden";
  }
