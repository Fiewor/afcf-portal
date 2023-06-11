import React from "react";

import "./styles/contents.scss";
import { Table, Dropdown, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Contents = () => {
  const headers = [
    "File name",
    "Event",
    "Date",
    "Session",
    "Semester",
    "Actions",
  ];

  const literatures = [
    {
      id: 0,
      fileName: "The way of the Cross Volume 1",
      event: "Bible Study",
      date: "Jan 12, 2023",
      session: "2022/2023",
      semester: "First Semester",
    },
    {
      id: 1,
      fileName: "National Prayer Request 2023 Q2",
      event: "Weekly Fellowship",
      date: "May 22, 2023",
      session: "2022/2023",
      semester: "First Semester",
    },
    {
      id: 2,
      fileName: "Amazing Grace by Rev. Isaac Aina",
      event: "Weekly Fellowship",
      date: "May 22, 2023",
      session: "2022/2023",
      semester: "First Semester",
    },
    {
      id: 3,
      fileName: "The way of the Cross Volume 2",
      event: "Bible Study",
      date: "Jan 12, 2023",
      session: "2022/2023",
      semester: "First Semester",
    },
  ];

  return (
    <div className="contents">
      <div className="contents__left">
        <div className="contents__left__upper">
          <Link to="/dashboard" className="contents__left__upper__main-link">
            Main Menu
          </Link>
          <p className="contents__left__upper__main-text">Contents</p>

          <p className="contents__left__upper__page-link">Literatures</p>
        </div>

        <div className="contents__left__lower">
          <p>Grace Afolayan</p>
          <p>Campus Secretary</p>
        </div>
      </div>

      <div className="contents__right">
        <div className="contents__right__upper">
          <div className="contents__right__upper__header">
            <Dropdown text="Select semester" className="">
              <Dropdown.Menu>
                <Dropdown.Item text="First Semester" />
                <Dropdown.Item text="Second Semester" />
                <Dropdown.Item text="Holidays" />
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown text="Select session" className="">
              <Dropdown.Menu>
                <Dropdown.Item text="2022/2023 Session" />
                <Dropdown.Item text="2023/2024 Session" />
                <Dropdown.Item text="2024/2025 Session" />
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <Table basic="very" className="contents__right__upper__table">
            <Table.Header>
              <Table.Row active>
                {headers.map((header) => (
                  <Table.HeaderCell>{header}</Table.HeaderCell>
                ))}
              </Table.Row>
            </Table.Header>

            <Table.Body className="contents__right__upper__table-body">
              {literatures.map(
                ({ id, fileName, event, date, session, semester }) => (
                  <Table.Row key={id}>
                    <Table.Cell>{fileName}</Table.Cell>
                    <Table.Cell>{event}</Table.Cell>
                    <Table.Cell>{date}</Table.Cell>
                    <Table.Cell>{session}</Table.Cell>
                    <Table.Cell>{semester}</Table.Cell>
                    <Table.Cell>
                      <Button className="contents__right__table-body__button-container__button">
                        Download
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                )
              )}
            </Table.Body>
          </Table>
        </div>

        <div className="contents__right__lower">
          <Button>Previous</Button>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Contents;
