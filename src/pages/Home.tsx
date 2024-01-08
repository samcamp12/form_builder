import * as React from "react";
import { TabView, TabPanel, type TabViewTabChangeParams } from "primereact/tabview";
import FormApp from "./FormApp";
import Preview from "./Display";

import "../styles/Home.scss";
import { useSelector } from "react-redux";
import { type RootState } from "store/store";

const tabItems = [
    {
        header: "Questionnaire Builder",
        content: (
            <div className="content">
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
    const { formList, title } = useSelector((state: RootState) => state.formState);

    const renderHomePage = tabItems.map((item) => {
        return (
            <TabPanel header={item.header} key={item.header}>
                {item.content}
            </TabPanel>
        );
    });

    const onTabChange = (param: TabViewTabChangeParams): void => {
        if (param.index === 1) {
            console.log(formList, title);
        }
    };

    return (
        <React.Fragment>
            <TabView onTabChange={onTabChange}>{renderHomePage}</TabView>
        </React.Fragment>
    );
};

export default Home;
