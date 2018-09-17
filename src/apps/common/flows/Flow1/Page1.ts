export const loaded: IDF.Extension.VoidOutput = ({ ctx, page }) => {
    console.log('Common App, Flow1/Page1 loaded event')
}

export const pageRenderer: IDF.Extension.JQueryOutput = ({ ctx, page }) => {
    console.log('Common App, Flow1/Page1 pageRenderer event')
    return page;
}