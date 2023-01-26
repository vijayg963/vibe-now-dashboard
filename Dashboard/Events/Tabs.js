import * as React from "react";
import PropTypes from "prop-types";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import Card from "../components/Card";
import { ActiveCards, MyEvent, Draft } from "../Mock";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Box sx={{ py: 1.5 }}>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const { value, setValue } = props;
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", width: "286px" }}>
        <Tabs
          sx={{
            ".Mui-selected": { color: "black !important" },
            ".mui-style-61sb3q-MuiTabs-indicator": {
              backgroundColor: "orange",
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ fontSize: "0.75rem", color: "black" }}
            label="Active"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ fontSize: "0.75rem", color: "black" }}
            label="Draft"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ fontSize: "0.75rem", color: "black" }}
            label="My event"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
    </Box>
  );
}

export function ActiveCard() {
  return (
    <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {ActiveCards && ActiveCards.map((data, i) => <Card key={i} {...data} />)}
    </Box>
  );
}

export function DraftCard() {
  return (
    <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {Draft && Draft.map((data, i) => <Card key={i} {...data} />)}
    </Box>
  );
}

export function MyEventCard() {
  return (
    <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {MyEvent && MyEvent.map((data, i) => <Card key={i} {...data} />)}
    </Box>
  );
}
