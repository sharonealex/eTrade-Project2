const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (username && password) {
      const response = await fetch('eTrade/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response)
  
      if (response.ok) {
        document.location.replace('/eTrade');
      } else {
        alert('Failed to log in.');
      }
    }
  };

  document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);
  