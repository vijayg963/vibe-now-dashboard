import { Checkbox } from "@mui/material";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

export const realTimeData = [
  {
    title: "Total Event",
    count: "379",
    seen: "Since yesterday",
    icon: "icons/Group 42203.png",
  },
  {
    title: "Total Revenue Earning",
    count: "$350.85",
    seen: "Since last month",
    icon: "icons/Group 42200.png",
  },
  {
    title: "Total Member",
    count: "48",
    seen: "Since last month",
    icon: "icons/Group 42201.png",
  },
  {
    title: "Total 2 Year Income",
    count: "$3350.85",
    seen: "Since last month",
    icon: "icons/Group 42202.png",
  },
  {
    title: "Withdrawn",
    count: "$250.00",
    seen: "24-Feb-22",
    icon: "icons/Group 42207.png",
  },
  {
    title: "Total Tickets",
    count: "379",
    seen: "Since last month",
    icon: "icons/Group 42204.png",
  },
  {
    title: "Total Engagement",
    count: "52,256",
    seen: "Since last month",
    icon: "icons/Group 42205.png",
  },
  {
    title: "Total  Tax",
    count: "$588.85",
    seen: "Since last month",
    icon: "icons/Group 42206.png",
  },
];

export var months = [
  "January",
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

export const currentValue = [
  { title: "Total Inverted", value: "31,477.50" },
  { title: "Repayment Done", value: "2556" },
  { mainTitle: "Email campaign", title: "Sent E-mails", value: "568" },
  { img: "/icons/Group 246.png", title: "Clicks", value: "216" },
];

function createData(name, id, link, value, checkBox, filter, img) {
  return {
    name,
    id,
    link,
    value,
    checkBox,
    filter,
    img,
  };
}
export const rows = [
  createData(
    "Malino Alexenderarin",
    305242344523344,
    "www.vibenow.com/243443",
    "$25",
    <Checkbox />,
    <RiDeleteBin6Line />,
    "/user1.png"
  ),
  createData(
    "Malino Alexenderarin",
    430524234233442,
    "www.vibenow.com/243443",
    "$25",
    <Checkbox />,
    <RiDeleteBin6Line />,
    "/user2.png"
  ),
  createData(
    "Malino Alexenderarin",
    230524234243344,
    "www.vibenow.com/243443",
    "$25",
    <Checkbox />,
    <RiDeleteBin6Line />,
    "/user3.png"
  ),
  createData(
    "Malino Alexenderarin",
    305242342334749,
    "www.vibenow.com/243443",
    "$25",
    <Checkbox />,
    <RiDeleteBin6Line />,
    "/user4.png"
  ),
  createData(
    "Malino Alexenderarin",
    330524234233446,
    "www.vibenow.com/243443",
    "$25",
    <Checkbox />,
    <RiDeleteBin6Line />
  ),
  createData(
    "Malino Alexenderarin",
    330524234233446,
    "www.vibenow.com/243443",
    "$25",
    <Checkbox />,
    <RiDeleteBin6Line />
  ),
  createData(
    "Malino Alexenderarin",
    330524234233446,
    "www.vibenow.com/243443",
    "$25",
    <Checkbox />,
    <RiDeleteBin6Line />
  ),
  createData(
    "Malino Alexenderarin",
    330524234233446,
    "www.vibenow.com/243443",
    "$25",
    <Checkbox />,
    <RiDeleteBin6Line />
  ),
  createData(
    "Malino Alexenderarin",
    330524234233446,
    "www.vibenow.com/243443",
    "$25",
    <Checkbox />,
    <RiDeleteBin6Line />
  ),
  createData(
    "Malino Alexenderarin",
    330524234233446,
    "www.vibenow.com/243443",
    "$25",
    <Checkbox />,
    <RiDeleteBin6Line />
  ),
  createData(
    "Malino Alexenderarin",
    330524234233446,
    "www.vibenow.com/243443",
    "$25",
    <Checkbox />,
    <RiDeleteBin6Line />
  ),
  createData(
    "Malino Alexenderarin",
    330524234233446,
    "www.vibenow.com/243443",
    "$25",
    <Checkbox />,
    <RiDeleteBin6Line />
  ),
  createData(
    "Malino Alexenderarin",
    330524234233446,
    "www.vibenow.com/243443",
    "$25",
    <Checkbox />,
    <RiDeleteBin6Line />
  ),
  createData(
    "Malino Alexenderarin",
    330524234233446,
    "www.vibenow.com/243443",
    "$25",
    <Checkbox />,
    <RiDeleteBin6Line />
  ),
  createData(
    "Malino Alexenderarin",
    330524234233446,
    "www.vibenow.com/243443",
    "$25",
    <Checkbox />,
    <RiDeleteBin6Line />
  ),
  createData(
    "Malino Alexenderarin",
    330524234233446,
    "www.vibenow.com/243443",
    "$25",
    <Checkbox />,
    <RiDeleteBin6Line />
  ),
];


function createDataTable(img, profile, code, price, link, menu) {
  return { img, profile, code, price, link, menu };
}

export const TableRows = [
  createDataTable(
    "/user1.png ",
    "Kristin Watson",
    "3235343465478766",
    "$25",
    "www.vibenow.com/3244",
    <RiDeleteBin6Line />
  ),
  createDataTable(
    "/user2.png ",
    "Theresa Webb",
    "3235343465478766",
    "$25",
    "www.vibenow.com/3244",
    <RiDeleteBin6Line />
  ),
  createDataTable(
    "/user3.png ",
    "Jerome Bell",
    "3235343465478766",
    "$25",
    "www.vibenow.com/3244",
    <RiDeleteBin6Line />
  ),
  createDataTable(
    "/user4.png ",
    "Cameron Williamson",
    "3235343465478766",
    "$25",
    "www.vibenow.com/3244",
    <RiDeleteBin6Line />
  ),
  createDataTable(
    "/user1.png ",
    "Kristin Watson",
    "3235343465478766",
    "$25",
    "www.vibenow.com/3244",
    <RiDeleteBin6Line />
  ),
  createDataTable(
    "/user2.png ",
    "Theresa Webb",
    "3235343465478766",
    "$25",
    "www.vibenow.com/3244",
    <RiDeleteBin6Line />
  ),
  createDataTable(
    "/user3.png ",
    "Jerome Bell",
    "3235343465478766",
    "$25",
    "www.vibenow.com/3244",
    <RiDeleteBin6Line />
  ),
  createDataTable(
    "/user4.png ",
    "Cameron Williamson",
    "3235343465478766",
    "$25",
    "www.vibenow.com/3244",
    <RiDeleteBin6Line />
  ),
  createDataTable(
    "/user1.png ",
    "Kristin Watson",
    "3235343465478766",
    "$25",
    "www.vibenow.com/3244",
    <RiDeleteBin6Line />
  ),
  createDataTable(
    "/user2.png ",
    "Theresa Webb",
    "3235343465478766",
    "$25",
    "www.vibenow.com/3244",
    <RiDeleteBin6Line />
  ),
  createDataTable(
    "/user3.png ",
    "Jerome Bell",
    "3235343465478766",
    "$25",
    "www.vibenow.com/3244",
    <RiDeleteBin6Line />
  ),
  createDataTable(
    "/user4.png ",
    "Cameron Williamson",
    "3235343465478766",
    "$25",
    "www.vibenow.com/3244",
    <RiDeleteBin6Line />
  ),
];



export const ActiveCards = [
  {
    shear: <BiShareAlt style={{ fontSize: "0.85rem" }} />,
    menu: <BsThreeDotsVertical style={{ fontSize: "0.9rem" }} />,
    img: "/cards/Rectangle 4653.png",
    title: "  Uk Eduction Expo 2022 Hotel Gulshan",
    time: "  23-April, 2022 at 10:32pm ",
    fee: "$17.84",
  },
  {
    shear: <BiShareAlt style={{ fontSize: "0.85rem" }} />,
    menu: <BsThreeDotsVertical style={{ fontSize: "0.9rem" }} />,
    img: "/cards/Rectangle 4653 (1).png",
    title: "  Uk Eduction Expo 2022 Hotel Gulshan",
    time: "  23-April, 2022 at 10:32pm ",
    fee: "$17.84",
  },
  {
    shear: <BiShareAlt style={{ fontSize: "0.85rem" }} />,
    menu: <BsThreeDotsVertical style={{ fontSize: "0.9rem" }} />,
    img: "/cards/Rectangle 4653 (2).png",
    title: "  Uk Eduction Expo 2022 Hotel Gulshan",
    time: "  23-April, 2022 at 10:32pm ",
    fee: "$17.84",
  },
  {
    shear: <BiShareAlt style={{ fontSize: "0.85rem" }} />,
    menu: <BsThreeDotsVertical style={{ fontSize: "0.9rem" }} />,
    img: "/cards/Rectangle 4653 (3).png",
    title: "  Uk Eduction Expo 2022 Hotel Gulshan",
    time: "  23-April, 2022 at 10:32pm ",
    fee: "$17.84",
  },
  {
    shear: <BiShareAlt style={{ fontSize: "0.85rem" }} />,
    menu: <BsThreeDotsVertical style={{ fontSize: "0.9rem" }} />,
    img: "/cards/Rectangle 4653 (4).png",
    title: "  Uk Eduction Expo 2022 Hotel Gulshan",
    time: "  23-April, 2022 at 10:32pm ",
    fee: "$17.84",
  },
  {
    shear: <BiShareAlt style={{ fontSize: "0.85rem" }} />,
    menu: <BsThreeDotsVertical style={{ fontSize: "0.9rem" }} />,
    img: "/cards/Rectangle 4653 (5).png",
    title: "  Uk Eduction Expo 2022 Hotel Gulshan",
    time: "  23-April, 2022 at 10:32pm ",
    fee: "$17.84",
  },
  {
    shear: <BiShareAlt style={{ fontSize: "0.85rem" }} />,
    menu: <BsThreeDotsVertical style={{ fontSize: "0.9rem" }} />,
    img: "/cards/Rectangle 4653 (6).png",
    title: "  Uk Eduction Expo 2022 Hotel Gulshan",
    time: "  23-April, 2022 at 10:32pm ",
    fee: "$17.84",
  },
  {
    shear: <BiShareAlt style={{ fontSize: "0.85rem" }} />,
    menu: <BsThreeDotsVertical style={{ fontSize: "0.9rem" }} />,
    img: "/cards/Rectangle 4653 (7).png",
    title: "  Uk Eduction Expo 2022 Hotel Gulshan",
    time: "  23-April, 2022 at 10:32pm ",
    fee: "$17.84",
  },
  {
    shear: <BiShareAlt style={{ fontSize: "0.85rem" }} />,
    menu: <BsThreeDotsVertical style={{ fontSize: "0.9rem" }} />,
    img: "/cards/Rectangle 4653 (8).png",
    title: "  Uk Eduction Expo 2022 Hotel Gulshan",
    time: "  23-April, 2022 at 10:32pm ",
    fee: "$17.84",
  },
];

export const Draft = [
  {
    menu: <BsThreeDotsVertical style={{ fontSize: "0.9rem" }} />,
    img: "/cards/Rectangle 4653 (1).png",
    title: "Draft",
    time: " ... ",
    fee: "$17.84",
  },
  {
    menu: <BsThreeDotsVertical style={{ fontSize: "0.9rem" }} />,
    img: "/cards/Rectangle 4653 (2).png",
    title: "Draft",
    time: " ... ",
    fee: "$17.84",
  },
  {
    menu: <BsThreeDotsVertical style={{ fontSize: "0.9rem" }} />,
    img: "/cards/Rectangle 4653 (3).png",
    title: "Draft",
    time: " ... ",
    fee: "$17.84",
  },
  {
    menu: <BsThreeDotsVertical style={{ fontSize: "0.9rem" }} />,
    img: "/cards/Rectangle 4653 (1).png",
    title: "Draft",
    time: " ... ",
    fee: "$17.84",
  },
];

export const MyEvent = [
  {
    shear: <BiShareAlt style={{ fontSize: "0.85rem" }} />,
    heart: <AiOutlineHeart style={{ color: "orange", fontSize: "0.9rem" }} />,
    img: "/cards/Rectangle 4653 (3).png",
    title: "  Uk Eduction Expo 2022 Hotel Gulshan",
    review: `5,024 (Review)`,
    location: " 3391 Elgin St. Celina Delaware",
    time: "  23-April, 2022 at 10:32pm ",
    fee: "$17.84",
  },
  {
    shear: <BiShareAlt style={{ fontSize: "0.85rem" }} />,
    heart: <AiOutlineHeart style={{ color: "orange", fontSize: "0.9rem" }} />,
    img: "/cards/Rectangle 4653 (4).png",
    title: "  Uk Eduction Expo 2022 Hotel Gulshan",
    review: `5,024 (Review)`,
    location: " 5391 Elgin St. Celina Delaware",
    time: "  23-April, 2022 at 10:32pm ",
    fee: "$17.84",
  },
  {
    shear: <BiShareAlt style={{ fontSize: "0.85rem" }} />,
    heart: <AiOutlineHeart style={{ color: "orange", fontSize: "0.9rem" }} />,
    img: "/cards/Rectangle 4653 (5).png",
    title: "  Uk Eduction Expo 2022 Hotel Gulshan",
    review: `5,024 (Review)`,
    location: " 7391 Elgin St. Celina Delaware",
    time: "  23-April, 2022 at 10:32pm ",
    fee: "$17.84",
  },
];
