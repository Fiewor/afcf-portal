import React from "react";
import { Form, Grid } from "semantic-ui-react";

import "../styles/campusfellowship.scss";

const CampusFellowship = () => {
  return (
    <div className="fellowship-container">
      <Grid.Row className="top">
        <Grid.Column>
          <Grid.Row className="top__header">
            <Grid.Column>
              <h2>Campus Fellowship Profile</h2>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row className="top__row">
            <Grid.Column>
              <p>Upload images</p>
            </Grid.Column>
          </Grid.Row>

          <Form.Input
            label="School name"
            placeholder="University of Lagos"
            required
            className="top__row"
          />

          <Form.Input
            label="Branch name"
            placeholder="Branch name"
            required
            className="top__row"
          />

          <Form.Group className="top__row">
            <Form.Input label="State" placeholder="Kwara" required width={4} />
            <Form.Input
              label="Town/City"
              placeholder="Ilorin"
              required
              width={4}
            />
          </Form.Group>

          <Form.Group className="top__row">
            <Form.Input
              label="No. of student member"
              placeholder="145"
              required
              width={4}
            />
            <Form.Input
              label="Number of staff member"
              placeholder="24"
              width={4}
            />
          </Form.Group>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row className="bottom">
        <Grid.Column width={16}>
          <h2>Pastor's information</h2>
          <Form.Input
            label="Pastor's name"
            placeholder="Firstname     Surname"
            required
          />
          <Form.Group>
            <Form.Input
              label="Pastor's Phone number"
              placeholder="0810012345"
              required
            />
            <Form.Input
              label="Pastor's Email address"
              placeholder="johndoe@example.com"
            />
          </Form.Group>
        </Grid.Column>
      </Grid.Row>
    </div>
  );
};

export default CampusFellowship;
