// document.addEventListener('DOMContentLoaded', function () {
//     const searchInput = document.getElementById('search_input');
//     const packageCards = document.getElementsByClassName('package_card');
  
//     searchInput.addEventListener('input', function () {
//       const query = searchInput.value.toLowerCase();
  
//       for (const packageCard of packageCards) {
//         const packageName = packageCard.querySelector('h2').textContent.toLowerCase();
//         const packageDescription = packageCard.querySelector('p').textContent.toLowerCase();
//         const isMatch = packageName.includes(query) || packageDescription.includes(query);
  
//         packageCard.style.display = isMatch ? 'block' : 'none';
//       }
//     });
//   });

// const detailsButton=document.querySelectorAll(".btn");

  
//   detailsButton.addEventListener("click",showDetails());
  
//   function showDetails(){
//     let cardDetails=document.querySelectorAll(".card_details");
    
//       if(cardDetails.style.visibility==="hidden")cardDetails.style.visibility="visible";
//       else cardDetails.style.visibility="hidden";
//   }



document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search_input');
  const packageCards = document.querySelectorAll('.package_card');

  searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();

    for (const packageCard of packageCards) {
      const packageName = packageCard.querySelector('h3').textContent.toLowerCase(); 
      const packageDescription = packageCard.querySelector('.card_details ul').textContent.toLowerCase(); 
      const isMatch = packageName.includes(query) || packageDescription.includes(query);

      packageCard.style.display = isMatch ? 'block' : 'none';
    }
  });

  const detailsButtons = document.querySelectorAll('.btn');

  detailsButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      const cardDetails = event.target.closest('.package_card').querySelector('.card_details');
      if (cardDetails.style.visibility === 'hidden' || !cardDetails.style.visibility) {
        cardDetails.style.visibility = 'visible';
      } else {
        cardDetails.style.visibility = 'hidden';
      }
    });
  });
});

