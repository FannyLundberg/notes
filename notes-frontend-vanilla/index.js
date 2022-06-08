// Inloggning
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const submitLoginBtn = document.getElementById("submitLoginBtn");
const loginMain = document.getElementById("loginMain");

// Fetch för att kontrollera login
function checkUser(userName, password) {

    let user = {
        "userName": userName,
        "password": password
    }

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

        if (data.message == "success") {
            localStorage.setItem("loggedIn", true);
            window.location.href = "loggedin.html";
            
        } else {
            let wrongInput = document.createElement("p");
            wrongInput.innerText = "Du har angett fel uppgifter, vänligen försök igen.";
            loginMain.append(wrongInput);
        }
    })
};


// Kontrollera om användaren angett rätt uppgifter vid login
submitLoginBtn.addEventListener("click", () => {

    let loginUser = userName.value;
    let loginPassword = password.value;

    console.log(loginUser, loginPassword);
    checkUser(loginUser, loginPassword);
});