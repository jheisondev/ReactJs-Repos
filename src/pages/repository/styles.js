import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const Loading = styled.div`
  background: #161616;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  ${props =>
    props.loading &&
    css`
      svg {
        margin-left: 10px;
        animation: ${rotate} 1s linear infinite;
      }
    `}
`;

const bounce = keyframes`
  0%, 100% {
		-webkit-transform: translateY(0);
		-ms-transform:     translateY(0);
		transform:         translateY(0)
	}
	40% {
		-webkit-transform: translateY(-5px);
		-ms-transform:     translateY(-5px);
		transform:         translateY(-5px)
	}
	60% {
		-webkit-transform: translateY(-3px);
		-ms-transform:     translateY(-3px);
		transform:         translateY(-3px)
	}
`;
export const Back = styled.a`
  padding: 10px;
  border-radius: 50%;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  /* background: #161616; */
  margin: 1px #161616 solid;
  box-shadow: 0 0 5px #161616;

  &:hover {
    animation: ${bounce} 0.5s;
  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 10px 0;
  }

  h1 {
    font-size: 24px;
    color: #161616;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #262626;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssuesList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #161616;

  li {
    display: flex;
    align-items: center;
    padding: 15px 10px;
    box-shadow: 0 0 3px #505050;
    border-radius: 4px;
    margin-bottom: 5px;
  }

  & + li {
    margin-top: 10px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    border: 1px solid #363636;
  }

  div {
    flex: 1;

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #7130c2;

        &:hover {
          color: #7159c1;
        }
      }

      span {
        background: #eee;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }
  }
`;

// export const Container = styled.div``;
