import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function LoggedIn() {

    const [docs, setDocs] = useState<[]>([]);


    useEffect(() => {
        getDocuments();
    }, [])


    // Hämta alla dokument
    function getDocuments() {
        fetch("http://localhost:3000/documents")
        .then(response => response.json())
        .then(docs => {
          console.log(docs)
    
          setDocs(docs);
        })
    }


    let printDocuments = docs.map((doc: any) => {
        return (
            <div key={doc.title}>
                <h3>{doc.title}</h3>
                <span>{doc.date}</span>
                <button>
                    <Link to={`/editDocument/${doc.title}`}>Redigera</Link>
                </button>
                <button>
                    <Link to={`/viewDocument/${doc.title}`}>Läs</Link>
                </button>
            </div>
            
        );
    });


    // Rendera ut HTML
    return (
        <>
            <section>
                <section id="subMenu">
                    <button>
                        <Link to={"/createDocument"}>Skapa nytt dokument</Link>
                    </button>
                    <button>
                        <Link to={"/"}>Logga ut</Link>
                    </button>
                </section>
            
                <section id="viewDocs">
                    <h2>Alla dokument</h2>
                    <div id="docContainer">
                        {printDocuments}
                    </div>
                </section>
            </section>
        </>
    );
};