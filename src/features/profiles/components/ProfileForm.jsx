import React from "react";
import { Button, Form } from "semantic-ui-react";

import { genderOptions, levelOptions } from "../../../common/utils/options";

import "../styles/profile-form.scss";

const ProfileForm = ({ title }) => {
  const updateProfile = () => {};

  return (
    <div className="profile-main">
      <div className="profile-main__header">
        <h1>{title} Profile</h1>

        <Button onClick={updateProfile}>Update profile</Button>
      </div>

      <Form className="profile-main__form">
        <Form.Group className="profile-main__form__group">
          <Form.Input label="Surname" placeholder="John" required width={4} />

          <Form.Input label="First name" placeholder="Doe" required width={4} />

          <Form.Input
            label="Other name"
            placeholder="Alex"
            required
            width={4}
          />
        </Form.Group>

        <Form.Group className="profile-main__form__group">
          <Form.Input
            type="date"
            label="Date of Birth"
            placeholder="17/05/1992"
            required
            width={4}
          />
          <Form.Input
            label="Phone number"
            placeholder="08100012345"
            required
            width={4}
          />
          <Form.Input
            label="Email address"
            placeholder="johndoe@example.com"
            required
            width={4}
          />
        </Form.Group>

        <Form.Group className="profile-main__form__group">
          <Form.Select
            fluid
            label="Gender"
            options={genderOptions}
            placeholder="Gender"
            required
            width={4}
          />
          <Form.Input
            label="Course of study"
            placeholder="Biochemistry"
            required
            width={8}
          />
        </Form.Group>

        <Form.Group className="profile-main__form__group">
          <Form.Input
            label="Years of program"
            placeholder="5"
            required
            width={4}
          />

          <Form.Select
            fluid
            label="Current level"
            options={levelOptions}
            placeholder="Select level"
            required
            width={4}
          />
        </Form.Group>

        <Form.Input
          label="What date were you saved"
          placeholder="17/05/1992"
          required
          type="date"
          width={4}
          className="profile-main__row__form__row"
        />

        <Form.Checkbox
          label="I am Sanctified."
          className="profile-main__row__form__row"
        />
        <Form.Checkbox
          label="I am Baptized with the Holy Ghost and Fire."
          className="profile-main__row__form__row"
        />

        <Form.Group className="profile-main__form__bottom">
          <Button>Save</Button>
          <Button>Cancel</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ProfileForm;
