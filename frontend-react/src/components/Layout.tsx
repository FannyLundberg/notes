import { Outlet } from "react-router-dom";

export function Layout() {

    return (
        <>
            <header>
                <h1>Logotype</h1>
            </header>

            <main><Outlet></Outlet></main>
            
            <footer></footer>
        </>
    );
};