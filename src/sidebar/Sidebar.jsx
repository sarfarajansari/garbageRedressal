import React from "react";
import styled from "styled-components";
import { BiSolidMessageError as ComplaintIcon } from "react-icons/bi";
import { RiDashboardHorizontalFill as DashboardIcon } from "react-icons/ri";
import { PiUsersThreeFill as StaffIcon } from "react-icons/pi";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
const Container = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  background-color: black;
  width: 80px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 5px;

  #logo {
    padding: 10px 0;
    border-bottom: 1px solid #eeeeee4a;
  }
  gap: 10px;

  .menu {
    svg {
      color: #ffffff7e;
      font-size: 30px;

      &:hover {
        color: white;
      }
    }

    padding: 10px 0;

    &.active {
      svg {
        color: #39b9d0;
      }
    }
  }
`;

const menus = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    link: "/",
  },
  {
    name: "Staffs",
    icon: <StaffIcon />,
    link: "/staffs",
  },
];
export const sidebarContext = React.createContext({
  active: "",
  setActive: () => {},
});
export const useSidebar = () => React.useContext(sidebarContext);
export const SidebarProvider = sidebarContext.Provider;
const Sidebar = () => {
  const { active } = useSidebar();
  return (
    <Container>
      <div id="logo">
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/logo2.png`}
            alt="logo"
            width={"60px"}
          />
        </Link>
      </div>
      {menus.map((menu) => {
        return (
          <div
            className={`menu ${active === menu.name ? "active" : ""}`}
            key={menu.name}
          >
            <Tooltip title={menu.name} placement="right">
              <Link to={menu.link}>{menu.icon}</Link>
            </Tooltip>
          </div>
        );
      })}
    </Container>
  );
};

export default Sidebar;
