"use client";

import type { ReactNode } from "react";
import AdminNav from './components/navbar/adminNav';
import "./style.css";
import { Tab, TabList, TabPanel, Tabs } from "./tabs";
const Admin = (props: { tabs: ReactNode }) => {
    return (
        <div className="text-white flex h-screen">
            <AdminNav />
            <main className="flex-grow p-10 bg-[#e9ebf0] ml-40 fontSomething">
                <h1 className="text-3xl font-semibold mb-6 text-[#66377B]">Иргэд</h1>
                <div className="wrapper">
                    <Tabs>
                        <TabList>
                            <Tab href="/admin/retail/health">Эрүүл мэнд, гэнэтийн осол</Tab>
                            <Tab href="/admin/retail/assets">Хөрөнгийн даатгал</Tab>
                            <Tab href="/admin/retail/response">Хариуцлагын даатгал</Tab>
                            <Tab href="/admin/retail/finance">Санхүүгийн даатгал</Tab>
                        </TabList>
                        <TabPanel>{props.tabs}</TabPanel>
                    </Tabs>
                </div>
            </main>
        </div>
    );
}

// export default Admin;