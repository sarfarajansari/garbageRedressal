import React, { useMemo } from "react";
import styled from "styled-components";
import { IoCloseSharp as CloseIcon } from "react-icons/io5";
import { Button, Image, Select, Tag } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: ${(p) => (p.active ? 0 : "-50vw")};
  bottom: 0;
  overflow: auto;
  width: 50vw;
  transition: 300ms;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  padding: 20px 40px;
  #closeicon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;

    svg {
      font-size: 30px;
      color: white;
    }
  }

  .key-value {
    display: grid;
    gap: 20px;
    grid-template-columns: 200px 1fr;

    .label {
      font-size: 1.8rem;
      color: #054345;
      line-height: 1.2;
    }
    .value {
      font-size: 2rem;
      color: #1ad4da;
      line-height: 1.2;
    }

    padding: 10px 0;
  }

  .assignField {
    display: flex;
    gap: 10px;
  }

  .complaint-images {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 10px;

    & > div {
      overflow: hidden;
      border-radius: 10px;

      /* border: 2px solid white; */
      display: grid;
      align-items: center;
    }
  }

  .image-section {
    background-color: #42475f;
    padding: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
  }

  h2 {
    color: white;
    text-decoration: underline;
    font-size: 2rem;
    margin-bottom: 10px;
    padding: 5px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  & ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.8) !important;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;
const staffs = [
  { name: "Rahul Sharma", emailId: "rahul.sharma@example.com" },
  { name: "Anjali Mehta", emailId: "anjali.mehta@example.com" },
  { name: "Vikram Singh", emailId: "vikram.singh@example.com" },
  { name: "Priya Gupta", emailId: "priya.gupta@example.com" },
  { name: "Amit Verma", emailId: "amit.verma@example.com" },
  { name: "Kavita Desai", emailId: "kavita.desai@example.com" },
  { name: "Rohan Joshi", emailId: "rohan.joshi@example.com" },
  { name: "Neha Kapoor", emailId: "neha.kapoor@example.com" },
];
const ComplaintDetails = ({ complaint = null, setComplaint }) => {
  function createFullAddress(address) {
    if (!address) return "";
    const { addressLine, city, state, country, zipcode } = address;

    const parts = [];

    if (addressLine) parts.push(addressLine);
    if (city) parts.push(city);
    if (state) parts.push(state);
    if (country) parts.push(country);
    if (zipcode) parts.push(`- ${zipcode}`);

    return parts.join(", ");
  }

  const staffOptions = useMemo(() => {
    return staffs.map((staff) => (
      <Select.Option key={staff.emailId} value={staff.emailId}>
        {staff.name}
      </Select.Option>
    ));
  });

  const statusToColor = (s) => {
    if (!s) return "gold";
    const status = s.toLowerCase();
    const data = {
      active: "red",
      "in progress": "gold",
      resolved: "green",
    };
    return data[status] || "gold";
  };

  const statusToIcon = (s) => {
    if (!s) return <SyncOutlined spin />;
    const status = s.toLowerCase();
    const data = {
      active: <ClockCircleOutlined />,
      "in progress": <SyncOutlined spin />,
      resolved: <CheckCircleOutlined />,
    };
    return data[status] || <SyncOutlined spin />;
  };
  <SyncOutlined spin={complaint?.currentStatus} />;
  return (
    <Container active={complaint ? true : false}>
      <div id="closeicon">
        <CloseIcon onClick={() => setComplaint(null)} />
      </div>
      <br />
      <div className="key-value">
        <div className="label">Complaint By</div>
        <div className="value">{complaint?.name}</div>
      </div>
      <div className="key-value">
        <div className="label">Email Id</div>
        <a href={`mailto:${complaint?.email}`}>
          <div className="value">{complaint?.emailId}</div>
        </a>
      </div>

      <br />
      <div className="key-value">
        <div className="label">Location</div>
        <div className="value">{createFullAddress(complaint?.address)}</div>
      </div>
      <div className="key-value">
        <div className="label">Assigned To</div>
        <div className="assignField">
          <Select
            style={{ minWidth: 300 }}
            value={complaint?.assignedTo?.emailId}
            onChange={(emailId) => {
              const staff = staffs.find((s) => s.emailId === emailId);
              setComplaint((c) => ({ ...c, assignedTo: staff }));
            }}
          >
            {staffOptions}
          </Select>
          <Button type="primary">Update</Button>
        </div>
      </div>
      <div className="key-value">
        <div className="label">Current Status</div>
        <div>
          <Tag
            color={statusToColor(complaint?.currentStatus)}
            style={{ fontSize: "1.5rem", display: "inline", top: 8 }}
            icon={statusToIcon(complaint?.currentStatus)}
          >
            {complaint?.currentStatus}
          </Tag>
        </div>
      </div>

      <div className="image-section">
        <h2>Complaint Images</h2>

        <div className="complaint-images">
          {complaint?.images.map((image, index) => (
            <div>
              <Image width={200} src={image} />
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default ComplaintDetails;
