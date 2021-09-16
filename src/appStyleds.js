import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #131217;
  transition: all ease 0.7s;
  .menu-icon {
    z-index: 999;
    height: 32px;
    width: 32px;
    position: absolute;
    cursor: pointer;
    top: 2.3em;
    left: 15px;
    @media (max-width: 768px) {
      left: 0px;
    }
  }
`;
export const Menu = styled.div`
  background-color: #1c1b21;
  height: 100vh;
  z-index: 900;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all ease 0.7s;
  border-top-right-radius: 80px;
  h2 {
    margin-bottom: 40px;
  }
  img.moto,
  .logo {
    transition: all ease 0.7s;
    margin-top: 30px;
    height: auto;
    width: 190px;
  }
  .logo {
    animation: image-spin infinite 20s linear;
  }

  @media (max-width: 425px) {
    width: 100%;
    border-top-right-radius: 0px;
  }
  @keyframes image-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export const PageBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #131217;

  overflow-y: auto;
`;
