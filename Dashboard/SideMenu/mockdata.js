import { RiDashboardFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { HiOutlineTicket } from "react-icons/hi";
import { FaUserFriends, FaCalendarAlt } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { IoMdSettings } from "react-icons/io";

export const dashBorderMenu = [
  {
    icons: <RiDashboardFill />,
    tag: "Dashboard",
    more: null,
  },
  {
    icons: <HiOutlineTicket />,
    tag: "Event",
    more: <BiChevronDown />,
    opt: ["Active", "Draft", "My event"],
  },
  {
    icons: <FaUserFriends />,
    tag: "Peoples",
    more: null,
  },
  {
    icons: <TiMessages />,
    tag: "Message",
    more: <BiChevronDown />,
    opt: ["Chat Section"],
  },
  {
    icons: <FaCalendarAlt />,
    tag: "Calendar",
    more: null,
  },
  {
    icons: <IoMdSettings />,
    tag: "Setting",
    more: null,
  },
];

export const menuData = [
  {
    icon: "icons/faq.png",
    text: "FAQs",
  },
  {
    icon: "icons/support.png",
    text: "Support",
  },
  {
    icon: "icons/terms.png",
    text: "Terms and Conditions",
  },
  {
    icon: "icons/logOut.png",
    text: "Logout",
  },
];
