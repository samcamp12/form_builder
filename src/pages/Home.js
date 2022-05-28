import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import FormApp from "./FormApp";
import Preview from "./Preview";


const tabItems = [
    {
        header: "Form Builder",
        content: <div className="content">
                    <img src={process.env.PUBLIC_URL + "/images/builder-background.jpg"} alt={"background"}/>
                    <FormApp />
                </div>,
    },
    {
        header: "Preview",
        content: <div className="content">
                    <img src={process.env.PUBLIC_URL + "/images/previewr-background.jpg"} alt={"background"}/>
                    <Preview />
                </div>
    },
]

const Home = () => {

    const renderHomePage = tabItems.map(item => {
        return (
            <TabPanel header={item.header} key={item.header}>
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