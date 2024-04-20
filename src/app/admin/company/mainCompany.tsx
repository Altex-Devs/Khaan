"use client";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Agriculture from './agriculture';

export const MainCompany = () => {
    return (
        <div className="flex w-full h-full flex-col">
            <Tabs selectedTabClassName="bg-white">
                <TabList className="my-2 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <Tab key="culture"
                        className="cursor-pointer py-2 px-4 flex flex-grow"
                        style={{ borderRadius: "10px" }}
                    >Agriculture</Tab>
                    <Tab key="mining"
                        className="cursor-pointer py-2 px-4 flex flex-grow"
                        style={{ borderRadius: "10px" }}
                    >Mining</Tab>
                    <Tab key="manufacturing"
                        className="cursor-pointer py-2 px-4 flex flex-grow"
                        style={{ borderRadius: "10px" }}
                    >Manufacturing</Tab>
                    <Tab key="construction"
                        className="cursor-pointer py-2 px-4 flex flex-grow"
                        style={{ borderRadius: "10px" }}
                    >Construction</Tab>
                     <Tab key="travel"
                        className="cursor-pointer py-2 px-4 flex flex-grow"
                        style={{ borderRadius: "10px" }}
                    >Travel and transportation agency</Tab>
                     <Tab key="finance"
                        className="cursor-pointer py-2 px-4 flex flex-grow"
                        style={{ borderRadius: "10px" }}
                    >Finance</Tab>
                     <Tab key="education"
                        className="cursor-pointer py-2 px-4 flex flex-grow"
                        style={{ borderRadius: "10px" }}
                    >Education</Tab>
                     <Tab key="health"
                        className="cursor-pointer py-2 px-4 flex flex-grow"
                        style={{ borderRadius: "10px" }}
                    >Health</Tab>
                     <Tab key="service"
                        className="cursor-pointer py-2 px-4 flex flex-grow"
                        style={{ borderRadius: "10px" }}
                    >Service</Tab>
                     <Tab key="fue_oil"
                        className="cursor-pointer py-2 px-4 flex flex-grow"
                        style={{ borderRadius: "10px" }}
                    >Fue and Oil</Tab>
                     <Tab key="other"
                        className="cursor-pointer py-2 px-4 flex flex-grow"
                        style={{ borderRadius: "10px" }}
                    >Others</Tab>
                </TabList>
                <TabPanel>
                    <Agriculture />
                </TabPanel>
                <TabPanel>
                    {/* <Property /> */}
                </TabPanel>
                <TabPanel>
                    {/* <Liability /> */}
                </TabPanel>
                <TabPanel>
                    {/* <Financial /> */}
                </TabPanel>
            </Tabs>
        </div>
    );
}
