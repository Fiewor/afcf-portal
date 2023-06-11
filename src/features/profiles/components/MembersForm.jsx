import React from "react";
import { Button, Form } from "semantic-ui-react";

import {
  genderOptions,
  programOptions,
  sessionOptions,
  departmentOptions,
} from "../../../common/utils/options";

import "../styles/membersform.scss";

const MembersForm = () => {
  return (
    <div className="members">
      <h1>Members</h1>

      <Form className="members__form">
        <h2>Student Member Profile</h2>
        <div className="members__form__top">
          <Form.Group widths="equal" className="members__form__top__group">
            <Form.Input label="Surname" placeholder="Jane" required />
            <Form.Input label="First name" placeholder="Doe" required />
            <Form.Input label="Other name" placeholder="Melissa" required />
          </Form.Group>

          <Form.Group widths="equal" className="members__form__top__group">
            <Form.Input label="Email address" placeholder="janedoe@gmail.com" />
            <Form.Input
              label="Phone number"
              placeholder="08100012345"
              required
            />
            <Form.Input
              type="date"
              label="Date of birth"
              placeholder="17/05/1992"
              required
            />
          </Form.Group>

          <Form.Select
            width={5}
            fluid
            label="Gender"
            options={genderOptions}
            placeholder="Gender"
            required
          />
          <Form.Group widths="equal" className="members__form__top__group">
            <Form.Select
              fluid
              label="Category of Program"
              options={programOptions}
              placeholder="Undergraduate"
              required
            />
            <Form.Select
              fluid
              label="Expected graduation session"
              options={sessionOptions}
              placeholder={sessionOptions[0]["text"]}
              required
            />
            <Form.Select
              fluid
              label="Department"
              options={departmentOptions}
              placeholder={departmentOptions[0]["text"]}
              required
            />
          </Form.Group>
        </div>

        <div className="members__form__middle">
          <h2>Next of Kin</h2>

          <Form.Group widths="equal" className="members__form__middle__group">
            <Form.Input label="First name" placeholder="Doe" />
            <Form.Input label="Last name" placeholder="Jane" />
            <Form.Input label="Phone number" placeholder="08100012345" />
          </Form.Group>

          <Form.Input width={5} label="Relationship" placeholder="Brother" />
        </div>

        <div className="members__form__button-container">
          <Button>Save</Button>
          <Button>Cancel</Button>
        </div>
      </Form>
    </div>
  );
};

export default MembersForm;
