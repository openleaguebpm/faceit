document.getElementById('rules-button').onclick = function() {
    document.getElementById('rules-modal').style.display = 'block';
  };
  
  document.querySelector('.close').onclick = function() {
    document.getElementById('rules-modal').style.display = 'none';
  };
  
  // Закрытие окна при клике вне модального окна
  window.onclick = function(event) {
    if (event.target == document.getElementById('rules-modal')) {
      document.getElementById('rules-modal').style.display = 'none';
    }
  };
  