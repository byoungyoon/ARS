import React from "react";
import { useParams } from "react-router-dom";
import parserBabel from "prettier/parser-babel";
import prettier from "prettier/standalone";
import { Code } from "../../components";
export const Detail = () => {
  const { cd } = useParams();

  const code = `
  import React, { useRef } from "react";
  import { useGLTF } from "@react-three/drei";
  
  export function Model(props) {
    const { nodes, materials } = useGLTF("/smg_90.glb");
    return (
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials["9smg2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials["9smg1"]}
          />
        </group>
      </group>
    );
  }
  
  useGLTF.preload("/smg_90.glb");`;

  const prettierConfig = { parser: "babel", plugins: [parserBabel] };

  return <Code>{prettier.format(code, prettierConfig)}</Code>;
};

export default Detail;
