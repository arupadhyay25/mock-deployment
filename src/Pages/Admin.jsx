import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import DataPage from "./DataPage";
import { ReportsPage } from "./ReportsPage";

export const Admin = () => {
  return (
    <Tabs isFitted variant="enclosed">
      <TabList>
        <Tab>Data Page</Tab>
        <Tab>Reports Page</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <DataPage />
        </TabPanel>
        <TabPanel>
          <ReportsPage />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
