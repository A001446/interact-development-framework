import { getPageName } from '../utils'

export const loaded: IDF.Extension.VoidOutput = ({ ctx, page }) => {
    console.log(`log-page-name, loaded: ${getPageName(ctx)}`)
}

export const pageRenderer: IDF.Extension.JQueryOutput = ({ ctx, page }) => {
    console.log(`log-page-name, pageRenderer: ${getPageName(ctx)}`)
    return page
}