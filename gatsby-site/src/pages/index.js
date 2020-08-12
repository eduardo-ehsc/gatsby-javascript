import React, {useState} from "react";
import Header from "../components/Header";

import styled from 'styled-components';

import './reset.css';

import configIcon from '../assets/config.svg';

export const EditorWrapper = styled.div`
    width: 300px;
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #151515;
`;

export const EditorBtn = styled.button`
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    background: white;
    border: none;
    outline: none;
    border-radius: 0 0 0 100%;
    padding: 0 0 10px 10px;
`;

const IndexPage = () => {
  const [test, setTest] = useState(true);
  const [cor, setCor] = useState('#555');

  const handleShowClick = () => {
      setTest(!test);
  }

  return (
    <div>
      <Header 
        pageTitle={cor}
      />

      <EditorBtn onClick={handleShowClick}>
        <img src={configIcon} alt="Configurações"/>
      </EditorBtn>

      {test && <EditorWrapper>
        <h1>Configurações</h1>
        <div>
          <label htmlFor="pageTitle">Título da página: {cor}</label>
          <input type="color" id="pageTitle" value={cor} onChange={e => setCor(e.target.value)}/>
        </div>
      </EditorWrapper>}
    </div>
  )
}


export default IndexPage;
