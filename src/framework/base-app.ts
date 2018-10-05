import '@babel/polyfill'
import 'whatwg-fetch'
import { getPageName } from '../apps/common/utils'
import { destroyVueInstances } from './vue-utils';

type stringKeyValueAnyObject = { [key: string]: any }

export default abstract class BaseApp {

    protected moduleCacheByPageName: stringKeyValueAnyObject = {}
    protected moduleCacheAllPages: stringKeyValueAnyObject = {}

    constructor(private appName: string) {
        this.cacheRequiredModules()
        this.registerApp()
    }

    abstract cacheRequiredModules(): void

    cacheModules(context: __WebpackModuleApi.RequireContext, moduleCache: stringKeyValueAnyObject) {
        context.keys().forEach((key: string) => {
            // if inserting into the "page name" cache, we expect the format of key to be: "./FlowName/PageName.ts"
            // we want to convert such keys to: "FlowName_PageName", which is the expected format of Page names from Interact
            // if we are inserting into the "all" pages cache, then we don't care what name goes into the cache
            const FlowName_PageName = key.replace(/^\.\/(.*)\/(.*)\.\w+$/, '$1_$2')
            moduleCache[FlowName_PageName] = context(key)
        })
    }

    registerApp() {
        initExtensions(this.appName, (app) => {
            app.registerExtension("loaded", (ctx, page) => {
                const pageName = getPageName(ctx)
                // page-specific extension
                if (this.moduleCacheByPageName[pageName] && this.moduleCacheByPageName[pageName].loaded) {
                    this.moduleCacheByPageName[pageName].loaded({ ctx, page })
                }
                // extensions that run on all pages
                for (let module in this.moduleCacheAllPages) {
                    if (this.moduleCacheAllPages[module].loaded) {
                        this.moduleCacheAllPages[module].loaded({ ctx, page })
                    }
                }
            })
            app.registerExtension("pageRenderer", (ctx, page) => {
                //special framework processing
                destroyVueInstances()
                const pageName = getPageName(ctx)
                // page-specific extension
                if (this.moduleCacheByPageName[pageName] && this.moduleCacheByPageName[pageName].pageRenderer) {
                    page = this.moduleCacheByPageName[pageName].pageRenderer({ ctx, page })
                }
                // extensions that run on all pages
                for (let module in this.moduleCacheAllPages) {
                    if (this.moduleCacheAllPages[module].pageRenderer) {
                        page = this.moduleCacheAllPages[module].pageRenderer({ ctx, page })
                    }
                }
                return page
            })
        })
    }
}