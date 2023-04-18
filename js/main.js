async function getRandomQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    const quoteDisplay = document.getElementById('quoteDisplay');
    typeWriter(quoteDisplay, data.content);
  }
  
  function typeWriter(element, text, i = 0) {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      setTimeout(() => typeWriter(element, text, i + 1), 125); //adjust typing speed
    } else {
      
      setTimeout(() => {
        element.innerHTML = '';
        getRandomQuote();
      }, 5000); // 1000 milliseconds = 1 second delay b/t quote generation
    }
  }
  
  
  window.onload = function() {
    getRandomQuote();
  };



