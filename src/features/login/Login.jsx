import React from "react";
import { Form, Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./styles/login.scss";

const Login = () => {
  return (
    <Grid className="login-grid">
      <Grid.Row>
        <Grid.Column>
          <Button floated="right" className="button button--top">
            <Link to="/dashboard">Login as National Admin</Link>
          </Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Form className="form">
            <h1 className="heading">Login to your account</h1>
            <Form.Input
              required
              placeholder="Email address (permanent email)"
            />
            <Form.Input required placeholder="Password" />
            <Form.Button className="button button--form">Login</Form.Button>
            <Link
              // to="https://youth.afmweca.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Forgot password?
            </Link>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Login;
