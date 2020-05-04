import '@babel/polyfill'
import 'whatwg-fetch'
import { getFormattedPageName } from '../apps/common/extensions/utils'
import { Vue } from './vue-utils';
import { IExtensionContext } from "typed-interact-extension/extensions";

export type Input = { ctx: IExtensionContext, page: JQuery };
export type VoidOutput = (input: Input) => void;
export type JQueryOutput = (input: Input) => JQuery;

export default abstract class BaseApp {

    protected moduleCacheByPageName: Record<string, any> = {}
    protected moduleCacheAllPages: Record<string, any> = {}

    constructor(private appName: string) {
        this.cacheRequiredModules()
        this.registerApp()
    }

    abstract cacheRequiredModules(): void

    cacheModules(context: __WebpackModuleApi.RequireContext, moduleCache: Record<string, any>) {
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
                const pageName = getFormattedPageName(ctx)

                // page-specific extension
                this.moduleCacheByPageName[pageName]?.loaded?.({ ctx, page });

                // extensions that run on all pages
                for (let module in this.moduleCacheAllPages) {
                    this.moduleCacheAllPages[module]?.loaded?.({ ctx, page });
                }
            })
            app.registerExtension("pageRenderer", (ctx, page) => {
                //special framework processing
                Vue.destroyVueInstances()
                const pageName = getFormattedPageName(ctx)
                // page-specific extension
                page = this.moduleCacheByPageName[pageName]?.pageRenderer?.({ ctx, page }) ?? page;

                // extensions that run on all pages
                for (let module in this.moduleCacheAllPages) {
                    page = this.moduleCacheAllPages[module]?.pageRenderer?.({ ctx, page }) ?? page;
                }
                return page
            })
        })
    }
}