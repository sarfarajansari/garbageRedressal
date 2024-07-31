import { Table, Tag } from "antd";
import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { useSidebar } from "../sidebar/Sidebar";

const Container = styled.div`
  background-color: #42475f;
  min-height: 100vh;

  padding: 40px;
`;

const colors = {
  Available: "green",
  Busy: "red",
};
const Staff = () => {
  const { setActive } = useSidebar();
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      emailId: "mike@abc.com",
      mobileNunber: "334454545",
      status: "Available",
    },
    {
      key: "2",
      name: "John",
      emailId: "john@abc.com",
      mobileNunber: "334454546",
      status: "Available",
    },
    {
      key: "3",
      name: "Sarah",
      emailId: "sarah@abc.com",
      mobileNunber: "334454547",
      status: "Available",
    },
    {
      key: "4",
      name: "Emily",
      emailId: "emily@abc.com",
      mobileNunber: "334454548",
      status: "Available",
    },
    {
      key: "5",
      name: "David",
      emailId: "david@abc.com",
      mobileNunber: "334454549",
      status: "Busy",
    },
    {
      key: "6",
      name: "Jessica",
      emailId: "jessica@abc.com",
      mobileNunber: "334454550",
      status: "Available",
    },
  ];

  const data = useMemo(
    () =>
      dataSource.map((item) => ({
        ...item,
        status: (
          <Tag
            color={colors[item.status]}
          >
            {item.status}
          </Tag>
        ),
      })),
    [dataSource]
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Email",
      dataIndex: "emailId",
      key: "emailId",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNunber",
      key: "mobileNunber",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  useEffect(() => {
    setActive("Staffs");
  }, [setActive]);
  return (
    <Container>
      <Table dataSource={data} columns={columns} />;
    </Container>
  );
};

export default Staff;
