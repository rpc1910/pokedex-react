import styled from 'styled-components';

export const Formulario = styled.form`
  display: flex;
  flex-direction: row;
  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
  }
  button {
    background: #395ea9;
    color: #ffcb05;
    font-weight: bold;
    padding: 10px 20px;
    border: 1px solid #395ea9;
    border-radius: 4px;
  }
`;

export const List = styled.ul`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
`;
