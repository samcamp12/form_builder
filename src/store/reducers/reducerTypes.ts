import { type Option } from "components/Form/FormTypes";
import { type FormTypeEnum } from "constants/FormTypeEnum";

export interface Form {
    id: number;
    formType: FormTypeEnum;
    title: string;
    options: Option[];
    isRequired: boolean;
}

export interface FormState {
    title: {
        formTitle: string;
        description: string;
    };
    formList: Form[];
}
