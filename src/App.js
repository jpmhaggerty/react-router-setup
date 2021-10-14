import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Nav className="me-auto">
              <button>
                <Link to="/">Home</Link>
              </button>
              <button>
                <Link to="/products">Products</Link>
              </button>
              <button>
                <Link to="/checkout">Checkout</Link>
              </button>
            </Nav>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Switch>
        <Route
          exact
          path="/products/item1"
          render={(props) => <Link to="/cart">Item One</Link>}
        />
        <Route
          exact
          path="/products/item2"
          render={(props) => <Link to="/cart">Item Two</Link>}
        />
        <Route
          exact
          path="/products/item3"
          render={(props) => <Link to="/cart">Item Three</Link>}
        />
      </Switch>

      <button>
        <Link to="/products/item1">Item One</Link>
      </button>
      <button>
        <Link to="/products/item2">Item Two</Link>
      </button>
      <button>
        <Link to="/products/item3">Item Three</Link>
      </button>

      <Route
        path="/checkout"
        render={(props) => <Link to="/checkout">Cart</Link>}
      />
      <Route
        path="/cart"
        render={(props) => <Link to="/">Complete Purchase</Link>}
      />
    </div>
  );
}

export default App;
