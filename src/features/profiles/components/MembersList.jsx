import React from "react";
import { Button, Icon, Dropdown, Table } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

import { headers } from "../../../common/utils/members";

import "../styles/memberslist.scss";

const MembersList = ({ members }) => {
  const nav = useNavigate();

  return (
    <div className="member-container">
      <div className="member-container__header">
        <h1>Members</h1>

        <div className="member-container__header">
          <Button>Download</Button>
          <Button
            icon
            labelPosition="right"
            onClick={() => nav("/profiles/members/form")}
          >
            Add new student
            <Icon name="plus" />
          </Button>
        </div>
      </div>

      <div className="member-container__middle">
        <Dropdown
          text="Select session"
          className="member-container__middle--item"
        >
          <Dropdown.Menu>
            <Dropdown.Item text="2022/2023 Session" />
            <Dropdown.Item text="2023/2024 Session" />
            <Dropdown.Item text="2024/2025 Session" />
          </Dropdown.Menu>
        </Dropdown>

        <div className="member-container__middle__select-container">
          <Dropdown text="Status" className="member-container__middle--item">
            <Dropdown.Menu>
              <Dropdown.Item text="Student" />
              <Dropdown.Item text="Staff" />
              <Dropdown.Item text="Visitor" />
            </Dropdown.Menu>
          </Dropdown>
          <p className="member-container__middle--item">Undergraduate</p>
          <p className="member-container__middle--item">100 level</p>
        </div>
      </div>

      <Table basic="very" className="member-container__table">
        <Table.Header>
          <Table.Row active>
            {headers.map((header, i) => (
              <Table.HeaderCell key={i}>{header}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body className="table-body">
          {members.map(({ fullName, number, session, id }) => (
            <Table.Row key={id}>
              <Table.Cell>{fullName}</Table.Cell>
              <Table.Cell>{number}</Table.Cell>
              <Table.Cell>{session}</Table.Cell>
              <Table.Cell>
                <div className="table-button-container">
                  <Button className="table-button-container__button">
                    Edit
                  </Button>
                  <Button className="table-button-container__button">
                    Preview
                  </Button>
                  <Button className="table-button-container__button">
                    Delete
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <div className="member-container__bottom">
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default MembersList;
