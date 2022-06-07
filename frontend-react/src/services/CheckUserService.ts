export function checkuser(user: any) {

    let userLogin = {
        "userName": user.userName,
        "password": user.password
    }

    console.log(user)

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userLogin)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

        if (data.message == "success") {
            console.log("Lyckad inloggning")
            window.location.href = "http://localhost:3001/loggedIn";

        } else {
            console.log("Felaktig inloggning")
            window.location.href = "http://localhost:3001/wrongInput";
        }
    })
}