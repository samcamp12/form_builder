import { type FormTypeEnum } from "constants/FormTypeEnum";
import type * as actionTypes from "./actionTypes";
import { type Option } from "components/FormBuilder/Types/FormTypes";

interface BaseAction<T> {
    type: T;
    id?: number;
}

export interface AddTitleAction extends BaseAction<typeof actionTypes.ADD_TITLE> {
    formTitle: string;
}

export interface AddTitleDescriptionAction
    extends BaseAction<typeof actionTypes.ADD_TITLE_DESCRIPTION> {
    description: string;
}

export interface ChangeFormTitleAction extends BaseAction<typeof actionTypes.CHANGE_FORM_TITLE> {
    id: number;
    title: string;
}

export interface AddNewFormAction extends BaseAction<typeof actionTypes.ADD_FORM> {
    formType: FormTypeEnum;
}

export interface DuplicateFormAction extends BaseAction<typeof actionTypes.DUPLICATE_FORM> {
    id: number;
}

export interface DeleteFormAction extends BaseAction<typeof actionTypes.DELETE_FORM> {
    id: number;
}

export interface SetRequiredAction extends BaseAction<typeof actionTypes.SET_REQUIRED> {}

export interface ChangeOptionsAction extends BaseAction<typeof actionTypes.CHANGE_OPTIONS> {
    options: Option[];
}

export interface ChangeFormOrder extends BaseAction<typeof actionTypes.CHANGE_FORM_ORDER> {
    dragIndex: number;
    hoverIndex: number;
}

export type ActionType =
    | AddTitleAction
    | AddTitleDescriptionAction
    | ChangeFormTitleAction
    | AddNewFormAction
    | DuplicateFormAction
    | DeleteFormAction
    | SetRequiredAction
    | ChangeOptionsAction
    | ChangeFormOrder;
