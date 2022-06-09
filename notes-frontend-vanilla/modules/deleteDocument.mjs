// Radera ett dokument
export function deleteDoc(title) {

    let deleteDocument = {
        "title": title
    }
    
    fetch("http://localhost:3000/documents", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify(deleteDocument)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        location.reload();
    })
}