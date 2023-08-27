import * as React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import FormApp from "./FormApp";
import Preview from "./Display";
import bgBuilder from "images/builder-background.jpg";

import "../styles/Home.scss";

const tabItems = [
    {
        header: "Form Builder",
        content: (
            <div className="content">
                <img src={bgBuilder} alt={"background"} />
                <FormApp />
            </div>
        ),
    },
    {
        header: "Preview",
        content: (
            <div className="content-display">
                <Preview />
            </div>
        ),
    },
];

const Home = (): JSX.Element => {
    const renderHomePage = tabItems.map((item) => {
        return (
            <TabPanel header={item.header} key={item.header}>
                {item.content}
            </TabPanel>
        );
    });

    return (
        <React.Fragment>
            <TabView>{renderHomePage}</TabView>
        </React.Fragment>
    );
};

export default Home;
