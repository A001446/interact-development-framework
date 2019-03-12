import BaseApp from '../../framework/base-app';
class WebApp extends BaseApp {
    cacheRequiredModules() {
        this.cacheModules(require.context('../common/extensions/flows', true, /\.ts$/), this.moduleCacheByPageName)
        this.cacheModules(require.context('./extensions/flows/', true, /\.ts$/), this.moduleCacheByPageName)
        this.cacheModules(require.context('../common/extensions/all-pages', true, /\.ts$/), this.moduleCacheAllPages)
    }
}
new WebApp('web-app')