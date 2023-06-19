import React from "react";
import { Form } from "semantic-ui-react";

import "../styles/campusfellowship.scss";

const CampusFellowship = () => {
  return (
    <div className="fellowship-container">
      <h2 className="fellowship-container__header">
        Campus Fellowship Profile
      </h2>

      <Form className="fellowship-container__form">
        <div className="fellowship-container__form__section">
          <p>Upload images</p>

          <Form.Input
            label="School name"
            placeholder="University of Lagos"
            required
            className="fellowship-container__form__section__item"
          />

          <Form.Input
            label="Branch name"
            placeholder="Branch name"
            required
            className="fellowship-container__form__section__item"
          />

          <Form.Group
            columns="equal"
            className="fellowship-container__form__section__group"
          >
            <Form.Input label="State" placeholder="Kwara" required />
            <Form.Input label="Town/City" placeholder="Ilorin" required />
          </Form.Group>

          <Form.Group
            columns="equal"
            className="fellowship-container__form__section__group"
          >
            <Form.Input
              label="No. of student member"
              placeholder="145"
              required
            />
            <Form.Input label="Number of staff member" placeholder="24" />
          </Form.Group>
        </div>

        <div className="fellowship-container__form__section">
          <h2>Pastor's information</h2>

          <Form.Input
            label="Pastor's name"
            placeholder="Firstname             Surname"
            className="fellowship-container__form__section__item"
            required
          />

          <Form.Group className="fellowship-container__form__section__group">
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
        </div>
      </Form>
    </div>
  );
};

export default CampusFellowship;
