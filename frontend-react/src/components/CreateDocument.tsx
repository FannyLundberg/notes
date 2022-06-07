// import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export function CreateDocument() {

    // const editorRef = useRef(null);

    // const log = () => {
    //     if (editorRef.current) {
    //       console.log(editorRef.current.getContent());
    //     }
    // };


    function createNewDoc() {
        console.log("Klickat i editorn", Editor)
    }


    // function getContent() {
    //     console.log("getContent")
    // }

    return (
      <>
        <input type="text" placeholder='Titel'/>
        <Editor
            apiKey='sy5qpdvs7ygvd1tcyaxond8i4ywqzo5s8aw3ui3jev7zr7lh'
            //   onInit={(evt, editor) => editorRef.current = editor}
            init={{
                // selector: "#textArea",
                height: 500,
                menubar: false,
                plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
                ],
                toolbar: ' undo redo | bold italic backcolor | ' +
                ' alignleft alignright | outdent indent | '
            }}
        />
        <button onClick={createNewDoc}>Skapa dokument</button>

        {/* <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js"></script> */}
      </>
    );
};