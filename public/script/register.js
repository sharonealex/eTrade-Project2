const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();
  const first_name = document.querySelector("#firstname").value.trim();
  const last_name = document.querySelector("#lastname").value.trim();
  const phone_number = document.querySelector("#phone").value.trim();

  if (username && password && first_name && last_name && phone_number) {
    const response = await fetch("/eTrade/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        first_name,
        last_name,
        phone_number,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/eTrade/login");

      // console.log(response);
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector("#register-form")
  .addEventListener("submit", signupFormHandler);
