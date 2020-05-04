import { VoidOutput, JQueryOutput } from "../../../../../framework/base-app";

export const loaded: VoidOutput = ({ ctx, page }) => {
    console.log('Common App, Flow1/Page1 loaded event')
}

export const pageRenderer: JQueryOutput = ({ ctx, page }) => {
    console.log('Common App, Flow1/Page1 pageRenderer event')
    return page;
}