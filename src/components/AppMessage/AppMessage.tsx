import * as React from "react";

import { Toast } from "primereact/toast";
import { ToastTypeEnum } from "constants/ToastTypeEnum";

export type ToastType = "success" | "info" | "warn" | "error" | undefined;

interface IWarningProps {
    type: ToastType;
    text: string;
}

export const AppMessage = ({ type, text = "" }: IWarningProps): JSX.Element => {
    const toast = React.useRef<Toast>(null);
    React.useEffect(() => {
        if (type !== undefined && type.length > 0 && text.length > 0) {
            let summary = "";
            switch (type) {
                case ToastTypeEnum.Success:
                    summary = "Success";
                    break;
                case ToastTypeEnum.Error:
                    summary = "Error";
                    break;
                default:
                    break;
            }
            showSuccessMessage(type, summary, text);
        }
    }, [type, text]);
    const showSuccessMessage = (type: ToastType, summary: string, text: string): void => {
        toast.current?.show({
            severity: type,
            summary,
            detail: text,
            life: 3000,
        });
    };
    return <Toast ref={toast} />;
};
