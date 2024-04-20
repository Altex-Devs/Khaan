"use client";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Financial from './financial';
import Health from './health';
import Liability from './liability';
import Property from './property';

export const MainRetail = () => {
    return (
        <div className="flex w-full h-full flex-col">
            <Tabs selectedTabClassName="bg-white">
                <TabList className="my-2 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <Tab key="health"
                        className="cursor-pointer py-2 px-4 flex flex-grow"
                        style={{ borderRadius: "10px" }}
                    >Health</Tab>
                    <Tab key="property"
                        className="cursor-pointer py-2 px-4 flex flex-grow"
                        style={{ borderRadius: "10px" }}
                    >Property</Tab>
                    <Tab key="liability"
                        className="cursor-pointer py-2 px-4 flex flex-grow"
                        style={{ borderRadius: "10px" }}
                    >Liability</Tab>
                    <Tab key="financial"
                        className="cursor-pointer py-2 px-4 flex flex-grow"
                        style={{ borderRadius: "10px" }}
                    >Financial</Tab>
                </TabList>
                <TabPanel>
                    <Health />
                </TabPanel>
                <TabPanel>
                    <Property />
                </TabPanel>
                <TabPanel>
                    <Liability />
                </TabPanel>
                <TabPanel>
                    <Financial />
                </TabPanel>
            </Tabs>
        </div>
    );
}
