import React from "react";
import { Button, Form } from "semantic-ui-react";

import {
  genderOptions,
  sessionOptions,
  roleOptions,
} from "../../../common/utils/options";

import "../styles/excoshistory.scss";

const ExcosHistory = () => {
  return (
    <div className="excos-history">
      <h1 className="excos-history__header">Excos History</h1>

      <Form className="excos-history__form">
        <div className="excos-history__form__container">
          <h2>Add Past Campus Fellowship Executive</h2>

          <Form.Group className="excos-history__form__container__group">
            <Form.Input label="Surname" placeholder="Jane" required />
            <Form.Input label="First name" placeholder="Doe" required />
          </Form.Group>

          <Form.Group className="excos-history__form__container__group">
            <Form.Input
              label="Email address"
              placeholder="janedoe@gmail.com"
              required
            />
            <Form.Input
              label="Phone number"
              placeholder="08100012345"
              required
            />
          </Form.Group>

          <Form.Group className="excos-history__form__container__group">
            <Form.Select
              fluid
              label="Gender"
              options={genderOptions}
              placeholder="Gender"
              width={6}
              required
            />
            <Form.Select
              fluid
              label="Role"
              options={roleOptions}
              placeholder="Coordinator"
              className="excos-history__form__container__item"
              width={6}
              required
            />
          </Form.Group>

          <Form.Select
            fluid
            label="Session"
            options={sessionOptions}
            placeholder={sessionOptions[0]["text"]}
            width={6}
            required
          />

          <div className="excos-history__form__container__button-container">
            <Button>Save</Button>
            <Button>Cancel</Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ExcosHistory;
