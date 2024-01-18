import { type Form } from "store/reducers/reducerTypes";

export const validateFormTitle = (form: Form[]): boolean => {
    if (form.length === 0) return false;
    return form.every((element) => element.title !== "");
};
