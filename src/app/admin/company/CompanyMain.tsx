"use client";
import { FormattedMessage } from "react-intl";
import { Tab, TabList, Tabs } from "../tabs";
import companyJson from "./data.json";
export const CompanyMain = () => {
    return (
        <>
            <main className="flex-grow p-20 bg-[#e9ebf0] ml-40 fontSomething ">
                <h1 className="text-3xl font-semibold mb-6 text-[#66377B]"><FormattedMessage id="header_corporate" /></h1>
                <div className="wrapper">
                    <Tabs>
                        <TabList>
                            {companyJson.map((data, index) => (
                                <Tab href="/admin/retail/health">{data.text}</Tab>
                            ))}
                        </TabList>
                        {/* <TabPanel>{props.tabs}</TabPanel> */}
                    </Tabs>
                </div>
            </main>
        </>
    );
}
