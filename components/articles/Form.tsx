"use client";
import React, { useState } from "react";
import axios from "axios";
import UpLoader from "./file-upload";
import Editor from "./editor";

const ArticleForm = () => {
  const [content, setContent] = useState<string>();

  const submitHandler = () =>
    axios
      .post("/api/article", { content, name: "onesamket" })
      .then((res) => console.log(res));
  return (
    <div>
      <div className="mb-12">
        <UpLoader />
        <Editor onChange={setContent} />
      </div>
      <button onClick={submitHandler} className="btn btn-primary">
        Post Article
      </button>
    </div>
  );
};

export default ArticleForm;
