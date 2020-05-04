import { getPageName } from '../utils'
import { VoidOutput, JQueryOutput } from "../../../../framework/base-app"

export const loaded: VoidOutput = ({ ctx, page }) => {
    console.log(`log-page-name, loaded: ${getPageName(ctx)}`)
}

export const pageRenderer: JQueryOutput = ({ ctx, page }) => {
    console.log(`log-page-name, pageRenderer: ${getPageName(ctx)}`)
    return page
}