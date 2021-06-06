const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (username && password) {
      const response = await fetch('/eTrade/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/eTrade');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const firstname = document.querySelector('#firstname').value.trim();
    const lastname = document.querySelector('#lastname').value.trim();
    const phone = document.querySelector('#phone').value.trim();
  
    if (username && password && firstname && lastname && phone) {
      const response = await fetch('/eTrade/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password, firstname, lastname, phone }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/eTrade');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document
    .querySelector('#register-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('#login-form')
    .addEventListener('submit', signupFormHandler);
  