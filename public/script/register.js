const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();
  const first_name = document.querySelector("#firstname").value.trim();
  const last_name = document.querySelector("#lastname").value.trim();
  const phone_number = document.querySelector("#phone").value.trim();
  const city = document.querySelector("#city").value.trim();
  const address_line1 = document.querySelector("#Address1").value.trim();
  const address_line2 = document.querySelector("#Address2").value.trim();
  const postal_code = document.querySelector("#postcode").value.trim();


  if (username && password && first_name && last_name && phone_number) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        first_name,
        last_name,
        phone_number,
        city,
        address_line1,
        address_line2,
        postal_code
      }),
      headers: { "Content-Type": "application/json" },
    });
   
    if (response.ok) {
       document.location.replace("/eTrade/login");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector("#register-form")
  .addEventListener("submit", signupFormHandler);
