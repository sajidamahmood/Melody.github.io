
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  
  document.body.classList.toggle('dark-mode', prefersDarkMode);


  function toggleDarkMode() {
      const body = document.body;
      body.classList.toggle('dark-mode');
      

      const sunIcon = document.querySelector();
      const moonIcon = document.querySelector();
      sunIcon.style.display = body.classList.contains() ? 'none' : 'inline';
      moonIcon.style.display = body.classList.contains('dark-mode') ? 'inline' : 'none';

  }
  document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);