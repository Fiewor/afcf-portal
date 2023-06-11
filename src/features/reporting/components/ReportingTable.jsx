import React from "react";
import { Button, Table, Dropdown } from "semantic-ui-react";

import "../styles/reporting-table.scss";

const ReportingTable = () => {
  const events = [
    {
      id: 0,
      eventName: "Bible Study",
      date: "Jan 12, 2023",
      semester: "First Semester",
      attendance: "35",
    },
    {
      id: 1,
      eventName: "Morning Prayer",
      date: "May 22, 2023",
      semester: "First Semester",
      attendance: "35",
    },
    {
      id: 2,
      eventName: "Fellowship",
      date: "Jan 12, 2023",
      semester: "First Semester",
      attendance: "35",
    },
    {
      id: 3,
      eventName: "Welcome program",
      date: "Jan 12, 2023",
      semester: "First Semester",
      attendance: "35",
    },
  ];

  const headers = ["Event Name", "Date", "Semester", "Attendance", "Actions"];

  return (
    <div className="reporting-table">
      <div className="reprting-table__upper">
        <div className="reporting-table__upper__middle">
          <Dropdown
            text="Select session"
            className="reporting-table__upper__middle__dropdown"
          >
            <Dropdown.Menu>
              <Dropdown.Item text="2022/2023 Session" />
              <Dropdown.Item text="2023/2024 Session" />
              <Dropdown.Item text="2024/2025 Session" />
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown
            text="Select semester"
            className="reporting-table__upper__middle__dropdown"
          >
            <Dropdown.Menu>
              <Dropdown.Item text="First Semester" />
              <Dropdown.Item text="Second Semester" />
              <Dropdown.Item text="Holidays" />
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Table>
          <Table.Header>
            <Table.Row active>
              {headers.map((header, id) => (
                <Table.HeaderCell key={id}>{header}</Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>

          <Table.Body className="">
            {events.map(({ id, eventName, date, semester, attendance }) => (
              <Table.Row key={id}>
                <Table.Cell>{eventName}</Table.Cell>
                <Table.Cell>{date}</Table.Cell>
                <Table.Cell>{semester}</Table.Cell>
                <Table.Cell>{attendance}</Table.Cell>
                <Table.Cell>
                  <Button className="table-button-container__button">
                    Edit
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      <div className="reporting-table__bottom">
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default ReportingTable;
