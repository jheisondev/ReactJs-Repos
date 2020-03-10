import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #161616;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 0.5s linear infinite;
      }
    `}
`;

export const MsgError = styled.p`
  margin-top: 8px;
  background: #e91e63;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  margin-top: 30px;

  li {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    box-shadow: 0 0 2px 0 #161616;
    color: #161616;
    margin-bottom: 5px;

    a {
      color: #161616;
      padding: 3px;
      border-radius: 4px;
    }
  }
`;
