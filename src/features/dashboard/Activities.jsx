import React from "react";
import { Button, Form } from "semantic-ui-react";

import { daysOptions } from "../../common/utils/options";

import "./styles/activities.scss";
import Sidebar from "./components/Sidebar";

const Activities = () => {
  return (
    <div className="activity-container">
      <div className="activity-container__sidebar-container">
        <Sidebar />
      </div>

      <div className="activities">
        <div className="activities__header">
          <h1>Activities</h1>

          <Button>Update activities</Button>
        </div>

        <Form className="activities__form">
          <div className="activities__form__section">
            <h2>Morning Prayer</h2>

            <Form.Group widths="equal">
              <Form.Input
                type="time"
                label="Time event starts"
                placeholder="5:30am"
                required
              />
              <Form.Input
                type="time"
                label="Time event ends"
                placeholder="6:00am"
                required
              />
            </Form.Group>
            <Form.Select
              fluid
              label="Days of the week"
              options={daysOptions}
              placeholder="Monday"
            />

            <Form.Input label="Event Venue" placeholder="Chapel" required />
          </div>

          <div className="activities__form__section">
            <h2>Bible Study</h2>

            <Form.Group widths="equal">
              <Form.Input
                type="time"
                label="Time event starts"
                placeholder="5:30am"
                required
              />
              <Form.Input
                type="time"
                label="Time event ends"
                placeholder="6:00am"
                required
              />
            </Form.Group>

            <Form.Select
              fluid
              label="Days of the week"
              options={daysOptions}
              placeholder="Monday"
            />

            <Form.Input label="Event Venue" placeholder="Chapel" required />
          </div>

          <div className="activities__form__section">
            <h2>Weekly Fellowship</h2>

            <Form.Group widths="equal">
              <Form.Input
                type="time"
                label="Time event starts"
                placeholder="5:30am"
                required
              />
              <Form.Input
                type="time"
                label="Time event ends"
                placeholder="6:00am"
                required
              />
            </Form.Group>

            <Form.Select
              fluid
              label="Days of the week"
              options={daysOptions}
              placeholder="Monday"
            />

            <Form.Input label="Event Venue" placeholder="Chapel" required />
          </div>

          <div className="activities__form__button-container">
            <Button>Save</Button>
            <Button>Cancel</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Activities;
