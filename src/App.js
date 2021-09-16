import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import { useSelector } from "react-redux";
import MenuItem from "./components/MenuItem";
import HomeScreen from "./pages/HomeScreen";
import { Container, Menu, PageBody } from "./appStyleds";
import PrivateRoute from "./components/PrivateRoute";
import ReactTooltip from "react-tooltip";
function App() {
  const [closeMenu, setCloseMenu] = useState(false);
  return (
    <BrowserRouter>
      <Container>
        <img
          className="menu-icon"
          src="/assets/menu.png"
          onClick={() => setCloseMenu(!closeMenu)}
        />
        <Menu
          style={{
            marginLeft: closeMenu ? "0px" : "-2220px",
            transition: "all ease 0.7s",
          }}
        >
          <img
            style={{
              marginLeft: closeMenu ? "0px" : "-2220px",
              transition: "all ease 0.7s",
            }}
            src="/assets/logo.png"
            className="logo"
          />
          <MenuItem
            close={closeMenu}
            title="Home"
            icon="/assets/store.png"
            link="/"
          />
          <img
            style={{
              marginLeft: closeMenu ? "0px" : "-2220px",
              transition: "all ease 0.7s",
            }}
            className="moto"
            icon="/assets/store.png"
            src="/assets/motoboy.png"
          />
        </Menu>
        <PageBody>
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <PrivateRoute exact path="/orders"></PrivateRoute>
            <PrivateRoute exact path="/profile"></PrivateRoute>
          </Switch>
        </PageBody>
        <ReactTooltip id="tip-right" place="right" effect="solid" />
      </Container>
    </BrowserRouter>
  );
}

export default App;

/*
<MenuItem title="Pedidos" icon="/assets/order.png" link="/orders" />
<MenuItem title="Perfil" icon="/assets/profile.png" link="/profile" />
          
*/
