import { IconType } from "react-icons";
export interface IFeature{
    icon:IconType;
    text:string;
    description:string;
}

export interface IWorkFlowlistItem{
    title:string;
    description:string;
}

export interface IPriceOption{
    title:string;
    price:string;
    features:string[];
}

export interface ITestimonial{
    user:string;
    company:string;
    image:string;
    text:string
}