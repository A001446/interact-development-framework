import { VoidOutput, JQueryOutput } from "../../../../../framework/base-app";

export const loaded: VoidOutput = ({ ctx, page }) => {
    console.log('Agent App, Flow2/Page1 loaded event')
}

export const pageRenderer: JQueryOutput = ({ ctx, page }) => {
    console.log('Agent App, Flow2/Page1 pageRenderer event')
    return page;
}