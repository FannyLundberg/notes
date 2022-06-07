import { Link } from "react-router-dom";

export function WrongInput() {

    return (
        <>
            <section>
                <h2>Du har angett fel uppgifter. Vänligen försök igen.</h2>
                <button>
                    <Link to={"/"}>Tillbaka till startsidan</Link>
                </button>
            </section>
        </>
    );
};