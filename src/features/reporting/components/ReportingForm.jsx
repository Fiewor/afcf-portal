import React from "react";
import { semesterOptions, sessionOptions } from "../../../common/utils/options";
import { Form } from "semantic-ui-react";

import "../styles/reporting-form.scss";
import { useSelector } from "react-redux";

const ReportingForm = () => {
  const reportingScreen = useSelector(
    (state) => state.reporting.reportingScreen
  );

  let label = "Facilitator";

  if (reportingScreen === "bible-study") {
    label = "Teacher/Facilitator";
  } else if (reportingScreen === "fellowship") {
    label = "Teacher";
  }

  return (
    <Form className="reporting-form">
      <Form.Group className="reporting-form__group">
        <Form.Select
          width={5}
          fluid
          label="Session"
          options={sessionOptions}
          placeholder={sessionOptions[0]["text"]}
          required
        />
        <Form.Select
          width={5}
          fluid
          label="Semester"
          options={semesterOptions}
          placeholder={semesterOptions[0]["text"]}
          required
        />
      </Form.Group>

      <Form.Input
        className="reporting-form__input"
        fluid
        label={label}
        placeholder="Bro. Titus"
        width={10}
        required
        // value={}
        // onChange={handleChange}
      />

      <Form.Input
        className="reporting-form__input"
        fluid
        label="Topic"
        placeholder="Holy living in this present world"
        width={10}
        required
        // value={}
        // onChange={handleChange}
      />

      <Form.Group className="reporting-form__group">
        <Form.Input
          className="reporting-form__group__input"
          fluid
          width={3}
          label="Date"
          placeholder="12/4/2023"
          type="date"
          required
        />
        {reportingScreen !== "welcome-program" &&
          reportingScreen !== "revival-program" && (
            <Form.Input
              className="reporting-form__group__input"
              fluid
              label="Attendance"
              placeholder="20"
              required
              // value={}
              // onChange={handleChange}
            />
          )}
      </Form.Group>

      {(reportingScreen === "welcome-program" ||
        reportingScreen === "revival-program") && (
        <div className="reporting-form__sub-container">
          <Form.Group className="reporting-form__sub-container__group">
            <Form.Input
              className="reporting-form__sub-container__group__input"
              fluid
              label="New Students"
              placeholder="10"
              required
              width={6}
              // value={}
              // onChange={handleChange}
            />
            <Form.Input
              className="reporting-form__sub-container__group__input"
              fluid
              label="Other attendees"
              placeholder="10"
              required
              width={6}
              // value={}
              // onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="reporting-form__sub-container__group">
            <Form.Input
              className="reporting-form__sub-container__group__input"
              fluid
              label="Staylites"
              placeholder="10"
              required
              width={6}
              // value={}
              // onChange={handleChange}
            />
            <Form.Input
              className="reporting-form__sub-container__group__input"
              fluid
              label="Staff"
              placeholder="10"
              required
              width={6}
              // value={}
              // onChange={handleChange}
            />
          </Form.Group>
        </div>
      )}

      <div className="reporting-form__blessing-container">
        <p className="reporting-form__blessing-container__header">Blessings</p>

        <Form.Group className="reporting-form__blessing-container__group">
          <p>Salvation</p>
          <Form.Input
            className="reporting-form__blessing-container__group__input"
            fluid
            placeholder="20"
            width={4}
            // value={}
            // onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="reporting-form__blessing-container__group">
          <p>Santification</p>
          <Form.Input
            className="reporting-form__blessing-container__group__input"
            fluid
            placeholder="20"
            width={4}
            // value={}
            // onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="reporting-form__blessing-container__group">
          <p>Baptism of the Holy Ghost</p>
          <Form.Input
            className="reporting-form__blessing-container__group__input"
            fluid
            placeholder="20"
            width={4}
            // value={}
            // onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="reporting-form__blessing-container__group">
          <p>Baptism of the Holy Ghost</p>
          <Form.Input
            className="reporting-form__blessing-container__group__input"
            fluid
            placeholder="20"
            width={4}
            // value={}
            // onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="reporting-form__blessing-container__group">
          <p>Other blessings</p>
          <Form.Input
            className="reporting-form__blessing-container__group__input"
            fluid
            placeholder="20"
            width={4}
            // value={}
            // onChange={handleChange}
          />
        </Form.Group>
      </div>

      <p className="reporting-form__upload">
        Click here to upload full report if necessary
      </p>

      <Form.Group className="reporting-form__button-container">
        <Form.Button>Save</Form.Button>
        <Form.Button>Cancel</Form.Button>
      </Form.Group>
    </Form>
  );
};

export default ReportingForm;
