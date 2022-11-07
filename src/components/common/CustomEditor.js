import React, { useMemo, useState } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import monokaiTheme from "monaco-themes/themes/Monokai.json";
import { useEffect } from "react";
import { inScript } from "../../utils";

export const CustomEditor = ({ languages }) => {
  const monaco = useMonaco();
  const script = useMemo(() => inScript(languages));

  const [code, setCode] = useState(script);

  const option = {
    selectOnLineNumbers: true,
    theme: "monokai",
    minimap: { enabled: false },
    automaticLayout: true,
    scrollBeyondLastLine: false,
    fontSize: 15,
  };

  useEffect(() => {
    if (!monaco) return;

    monaco.editor.defineTheme("monokai", monokaiTheme);
    monaco.editor.setTheme("monokai");
  }, [monaco]);

  const onChangeByCode = (value) => {
    setCode(value);
  };

  return (
    <Editor
      value={code}
      defaultLanguage={languages}
      width="100%"
      height="500px"
      options={option}
      onChange={onChangeByCode}
    />
  );
};
