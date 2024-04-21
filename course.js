// script.js
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // Redirect to another page when a card is clicked
      window.location.href = 'anotherpage.html';
    });
  });
  
  // Code for filtering cards based on search
  document.getElementById('searchBar').addEventListener('input', function() {
    const searchText = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      const title = card.querySelector('.card-title').innerText.toLowerCase();
      if (title.includes(searchText)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
  