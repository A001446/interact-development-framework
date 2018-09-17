export const loaded: IDF.Extension.VoidOutput = ({ ctx, page }) => {
    console.log('Agent App, Flow2/Page1 loaded event')
}

export const pageRenderer: IDF.Extension.JQueryOutput = ({ ctx, page }) => {
    console.log('Agent App, Flow2/Page1 pageRenderer event')
    return page;
}