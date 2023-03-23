import * as React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import FormApp from "./FormApp";
import Preview from "./Preview";
import bgBuilder from "images/builder-background.jpg";
import bgPreview from "images/preview-background.jpg";;


const tabItems = [
    {
        header: "Form Builder",
        content: <div className="content">
                    <img src={bgBuilder} alt={"background"}/>
                    <FormApp />
                </div>,
    },
    {
        header: "Preview",
        content: <div className="content">
                    <img src={bgPreview} alt={"background"}/>
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