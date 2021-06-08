const logoutBtn = () => {
  var logoutConfirmed = confirm("Press OK to confirm");

  if (logoutConfirmed == true) {
    logout();
  }
};

const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/eTrade");
  } else {
    alert("Failed to log out.");
  }
};

document.querySelector("#logout").addEventListener("click", logoutBtn);
