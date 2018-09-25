import '@babel/polyfill'
import 'whatwg-fetch'
import { getPageName } from '../common/utils'
import { destroyVueInstances } from '../../framework/vue-utils';

type stringKeyValueAnyObject = { [key: string]: any }

const moduleCacheByPageName: stringKeyValueAnyObject = {}
const moduleCacheAllPages: stringKeyValueAnyObject = {}

const cacheModules = (context: __WebpackModuleApi.RequireContext, moduleCache: stringKeyValueAnyObject) => {
    context.keys().forEach((key: string) => {
        // if inserting into the "page name" cache, we expect the format of key to be: "./FlowName/PageName.ts"
        // we want to convert such keys to: "FlowName_PageName", which is the expected format of Page names from Interact
        // if we are inserting into the "all" pages cache, then we don't care what name goes into the cache
        const FlowName_PageName = key.replace(/^\.\/(.*)\/(.*)\.\w+$/, '$1_$2')
        moduleCache[FlowName_PageName] = context(key)
    })
}
cacheModules(require.context('../common/flows', true, /\.ts$/), moduleCacheByPageName)
cacheModules(require.context('./flows/', true, /\.ts$/), moduleCacheByPageName)
cacheModules(require.context('../common/all-pages', true, /\.ts$/), moduleCacheAllPages)

initExtensions("mobileApp", (app) => {

    app.registerExtension("loaded", (ctx, page) => {
        const pageName = getPageName(ctx)
        // page-specific extension
        if (moduleCacheByPageName[pageName] && moduleCacheByPageName[pageName].loaded) {
            moduleCacheByPageName[pageName].loaded({ ctx, page })
        }
        // extensions that run on all pages
        for (let module in moduleCacheAllPages) {
            if (moduleCacheAllPages[module].loaded) {
                moduleCacheAllPages[module].loaded({ ctx, page })
            }
        }
    })

    app.registerExtension("pageRenderer", (ctx, page) => {
        //special framework processing
        destroyVueInstances()
        const pageName = getPageName(ctx)
        // page-specific extension
        if (moduleCacheByPageName[pageName] && moduleCacheByPageName[pageName].pageRenderer) {
            page = moduleCacheByPageName[pageName].pageRenderer({ ctx, page })
        }
        // extensions that run on all pages
        for (let module in moduleCacheAllPages) {
            if (moduleCacheAllPages[module].pageRenderer) {
                page = moduleCacheAllPages[module].pageRenderer({ ctx, page })
            }
        }
        return page
    })

})