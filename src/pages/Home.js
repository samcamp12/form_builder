import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import FormApp from "./FormApp";
import Preview from "./Preview";


const tabItems = [
    {
        header: "Form Builder",
        content: <FormApp />,
    },
    {
        header: "Preview",
        content: <Preview />,
    },
]

const Home = () => {

    const renderHomePage = tabItems.map(item => {
        return (
            <TabPanel header={item.header}>
                {item.content}
            </TabPanel>
        )
    })

    return (
        <React.Fragment>
            <TabView>
                {renderHomePage}                
            </TabView>
        </React.Fragment>
    )

}

export default Home;