"use client";
import { useQuill } from "react-quilljs";

import "quill/dist/quill.snow.css";
import { useEffect } from "react";

const Editor = ({ onChange }: { onChange: (are: string) => void }) => {
  const { quill, quillRef } = useQuill();
  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        onChange(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);

  return (
    <div className="w-full h-[40vh] px-5">
      <div ref={quillRef} />
    </div>
  );
};

export default Editor;
