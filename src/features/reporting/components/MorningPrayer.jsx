import React from "react";
import { Table, Dropdown, Input, Button } from "semantic-ui-react";

import { daysOptions } from "../../../common/utils/options";

import "../styles/morning-prayer.scss";

const MorningPrayer = () => {
  const months = [
    "January",
    "February",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = daysOptions.map((options) => options.text);

  const headers = [
    "Day",
    "Date",
    "Day of the week",
    "Leader’s name",
    "Attendance",
  ];

  return (
    <div className="morning-prayer-container">
      <div className="top">
        <Dropdown text="Select session" className="">
          <Dropdown.Menu>
            <Dropdown.Item text="2022/2023 Session" />
            <Dropdown.Item text="2023/2024 Session" />
            <Dropdown.Item text="2024/2025 Session" />
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown text="Select semester" className="">
          <Dropdown.Menu>
            <Dropdown.Item text="First Semester" />
            <Dropdown.Item text="Second Semester" />
            <Dropdown.Item text="Holidays" />
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown text="Select month" className="">
          <Dropdown.Menu>
            {months.map((month, id) => (
              <Dropdown.Item key={id} text={month} />
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Table>
        <Table.Header>
          <Table.Row active>
            {headers.map((header) => (
              <Table.HeaderCell>{header}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body className="">
          {days.map((day, i) => {
            return (
              i < 5 && (
                <Table.Row key={i}>
                  <Table.Cell>
                    <p>{`Day ${i + 1}`}</p>
                  </Table.Cell>

                  <Table.Cell>
                    <Input type="date" />
                  </Table.Cell>

                  <Table.Cell>
                    <Input type="date" />
                  </Table.Cell>

                  <Table.Cell>
                    <Input placeholder="John Doe" />
                  </Table.Cell>

                  <Table.Cell>
                    <Input placeholder={Math.floor(Math.random() * 10) + 1} />
                  </Table.Cell>
                </Table.Row>
              )
            );
          })}
        </Table.Body>
      </Table>

      <div className="notes">
        <p>NB</p>
        <ul>
          <li>Where it is not applicable, put N/A</li>
          <li>Fill this only when the week is over</li>
        </ul>
      </div>

      <div className="bottom">
        <Button>Save</Button>
        <Button>Cancel</Button>
      </div>
    </div>
  );
};

export default MorningPrayer;
