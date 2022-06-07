import { ChangeEvent, useState } from "react";
import { checkuser } from "../services/CheckUserService";

export function Login() {

    const [userName, setUserName] = useState<any>();
    const [password, setPassword] = useState<any>();

    const [user, setUser] = useState<any>({
        userName: userName,
        password: password
    });

    
    // Hantera input userName
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        
        let name = event.target.name;
        setUser({...user, [name]: event.target.value});

        console.log(name)
    }


    // Kontrollera om användaren har angett rätt uppgifter 
    function submitLogin() {
        console.log()
        checkuser(user)
    }

    return (
        <>
            <section>
                <h2>Välkommen till dokumenthanteraren!</h2>

                <form>
                    <input 
                    type="text" 
                    onChange={handleChange} 
                    name="userName" 
                    id="userName" 
                    value={user.userName}
                    placeholder="Användarnamn" />

                    <input 
                    type="password" 
                    onChange={handleChange} 
                    name="password" 
                    id="password" 
                    value={user.password}
                    placeholder="Lösenord" />
                </form>

                <button id="submitLoginBtn" onClick={submitLogin}>Logga in</button>
            </section>
        </>
    );
};