import '@babel/polyfill'
import 'whatwg-fetch'
import { getPageName } from '../common/utils'
import '../common/newRootVueInstance'

const moduleCache: { [key: string]: any } = {};
const cacheModules = (context: __WebpackModuleApi.RequireContext) => {
    context.keys().forEach((key: string) => {
        // we expect the format of key to be: "./FlowName/PageName.ts"
        // we want to convert to: "FlowName_PageName", which is the expected format of Page names from Interact
        const FlowName_PageName = key.replace(/^\.\/(.*)\/(.*)\.\w+$/, '$1_$2')
        moduleCache[FlowName_PageName] = context(key)
    });
}
cacheModules(require.context('../common/flows', true, /\.ts$/))
cacheModules(require.context('./flows/', true, /\.ts$/))

initExtensions("mobileApp", (app) => {

    app.registerExtension("loaded", (ctx, page) => {
        const pageName = getPageName(ctx);
        // we don't know what format (if any) the pageName will be in
        if (moduleCache[pageName] && moduleCache[pageName].loaded) {
            moduleCache[pageName].loaded({ ctx, page });
        }
    })

    app.registerExtension("pageRenderer", (ctx, page) => {
        const pageName = getPageName(ctx);
        // we don't know what format (if any) the pageName will be in
        if (moduleCache[pageName] && moduleCache[pageName].pageRenderer) {
            return moduleCache[pageName].pageRenderer({ ctx, page });
        }
        else return page;
    })

})