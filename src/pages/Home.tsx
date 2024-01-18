import * as React from "react";
import { TabView, TabPanel, type TabViewTabChangeParams } from "primereact/tabview";
import FormApp from "./FormApp";
import Preview from "./Display";

import "../styles/Home.scss";
import { useSelector } from "react-redux";
import { type RootState } from "store/store";
import { AppMessage, type ToastType } from "components/AppMessage/AppMessage";
import { validateFormTitle } from "services/utils/HomeUtils";
import { ToastTypeEnum } from "constants/ToastTypeEnum";

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
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [appMessage, setAppMessage] = React.useState<{
        type: ToastType;
        text: string;
    }>({
        type: undefined,
        text: "",
    });

    const renderHomePage = tabItems.map((item) => {
        return (
            <TabPanel header={item.header} key={item.header}>
                {item.content}
            </TabPanel>
        );
    });

    const onTabChange = (param: TabViewTabChangeParams): void => {
        if (param.index === 1) {
            if (title.formTitle === "") {
                setAppMessage((prevState) => ({
                    ...prevState,
                    type: ToastTypeEnum.Error,
                    text: "Please enter questionnaire title",
                }));
                setTimeout(() => {
                    setAppMessage({
                        type: undefined,
                        text: "",
                    });
                }, 3000);
                return;
            }
            if (!validateFormTitle(formList)) {
                setAppMessage((prevState) => ({
                    ...prevState,
                    type: ToastTypeEnum.Error,
                    text: "Please make sure all questions have a title",
                }));
                setTimeout(() => {
                    setAppMessage({
                        type: undefined,
                        text: "",
                    });
                }, 3000);
                return;
            }
            setActiveIndex(1);
        } else {
            setActiveIndex(0);
        }
    };

    return (
        <React.Fragment>
            <AppMessage type={appMessage.type} text={appMessage.text} />
            <TabView activeIndex={activeIndex} onTabChange={onTabChange}>
                {renderHomePage}
            </TabView>
        </React.Fragment>
    );
};

export default Home;
