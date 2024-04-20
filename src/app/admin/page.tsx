"use client";
import { auth } from '@/firebase/firebase';
import { theme } from "@/themes/themes";
import { CacheProvider } from "@chakra-ui/next-js";
import { Box, Button, ChakraProvider, FormLabel } from "@chakra-ui/react";
// import TabContext from "@mui/lab/TabContext";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { IntlProvider } from 'react-intl';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { IconLogout } from '@/assets/svg/icon-logout';
import { MainCompany } from './company';
import { MainRetail } from './retail';
import './style.css';
const AdminNav = () => {
    const router = useRouter();
    const [locale, setLocale] = useState("mn");
    const logout = () => {
        auth.signOut().then(() => {
            router.push("/auth");
        }).catch((error) => {
            console.log(error);
        });
    };


    return (
        <html lang="mn">
            <body>
                <IntlProvider
                    locale={locale}
                    defaultLocale="en"
                >
                    <CacheProvider>
                        <ChakraProvider theme={theme}>
                            <Box display="auto" backgroundColor={"#E5E4E2"} color={"black"} padding={"20px"} height={"v-full"}>
                                <Box textAlign={"right"} paddingBottom={"20px"}>
                                    {/* <Icon as={AddIcon} w={6} h={6} /> */}
                                    <FormLabel textAlign={"right"}>Username:</FormLabel>
                                    <Button onClick={logout}><IconLogout />Logout</Button>
                                </Box>
                                <Tabs selectedTabClassName="bg-white">
                                    <TabList className="my-2 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                        <Tab key="citizenTab"
                                            className="cursor-pointer py-4 px-8 bg-grey-background border border-grey-intermediate flex flex-grow"
                                            style={{
                                                borderRadius: 10,
                                                fontWeight: 'bold',
                                                overflow: 'auto'
                                            }}><text>Citizens</text></Tab>
                                        <Tab key="companyTab" className="cursor-pointer py-4 px-8 bg-grey-background border border-grey-intermediate flex flex-grow"
                                            style={{
                                                borderRadius: 10,
                                                fontWeight: 'bold',
                                                overflow: 'auto'
                                            }}><text>Companies</text></Tab>
                                    </TabList>
                                    <TabPanel>
                                        <MainRetail />
                                    </TabPanel>
                                    <TabPanel>
                                        <MainCompany />
                                    </TabPanel>
                                </Tabs>
                            </Box>
                        </ChakraProvider>
                    </CacheProvider>
                </IntlProvider>
            </body>
        </html>
    )
}

export default AdminNav