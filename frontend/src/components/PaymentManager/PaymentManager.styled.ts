import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 70px;
`;
export const container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  min-height: 100vh;
`;
export const form = styled.form`
  padding: 20px;
  width: 700px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  flex: 1 1 250px;
`;
export const inputBox = styled.div`
  margin-top: 10px;
  &:focus {
    border: 1px solid #000;
  }
  width: 100%;
  margin-bottom: 20px;
  margin-left: 10px;
  border-radius: 3px;
  padding: 4px;
`;
export const col = styled.div`
  width: 300px;
`;
export const row = styled.div`
  display: flex;
  flex: 1 1 250px;
  flex-wrap: wrap;
`;
export const flex = styled.div``;
export const name = styled.div``;
export const inputName = styled.input`
  width: 100%;
  padding: 5px 0;
`;
export const submitbtn = styled.button`
  width: 100px;
  height: 50px;
  margin-left: 250px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: green;
  }
`;
export const lala = styled.input``;
