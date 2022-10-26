import React from "react";
import theme from "prism-react-renderer/themes/nightOwlLight";
import Highlight, { defaultProps } from "prism-react-renderer";

export const Code = ({ children }) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={children} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className}`} style={{ ...style, fontSize: 12 }}>
          {tokens.map((line, index) => (
            <div key={index} {...getLineProps({ line, key: index })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
