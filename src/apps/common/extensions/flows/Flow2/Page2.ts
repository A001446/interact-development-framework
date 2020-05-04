import { VoidOutput, JQueryOutput } from "../../../../../framework/base-app";

export const loaded: VoidOutput = ({ ctx, page }) => {
    console.log('Common App, Flow2/Page2 loaded event')
}

export const pageRenderer: JQueryOutput = ({ ctx, page }) => {
    console.log('Common App, Flow2/Page2 pageRenderer event')
    return page;
}