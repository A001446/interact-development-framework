export const loaded: IDF.Extension.VoidOutput = ({ ctx, page }) => {
    console.log('Common App, Flow2/Page2 loaded event')
}

export const pageRenderer: IDF.Extension.JQueryOutput = ({ ctx, page }) => {
    console.log('Common App, Flow2/Page2 pageRenderer event')
    return page;
}