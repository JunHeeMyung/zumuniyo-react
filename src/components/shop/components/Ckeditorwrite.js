import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function Ckeditorwrite() {
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data="왜 안돼 나와라 좀<p>Hello from CKEditor 5!</p>"

        onReady={editor => {
          editor.ui
            .getEditableElement()
            .parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement()
            );
        }}

        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });

        }}

      />

    </>
  );
}

export default Ckeditorwrite;
