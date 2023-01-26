import Head from "next/head";
import { Box } from "@mui/material";
import React from "react";
import HomeDashboard from "../Dashboard/Home";
import DashboardLayout from "../Dashboard/DashboardLayout";
// import styles from "../styles/Home.module.css";

export default function Home({ children }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <DashboardLayout>
          <HomeDashboard />
        </DashboardLayout>
      </Box>
    </div>
  );
}
