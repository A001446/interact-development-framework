import BaseApp from '../../framework/base-app';
class WebApp extends BaseApp {
    cacheRequiredModules() {
        this.cacheModules(require.context('../common/flows', true, /\.ts$/), this.moduleCacheByPageName)
        this.cacheModules(require.context('./flows/', true, /\.ts$/), this.moduleCacheByPageName)
        this.cacheModules(require.context('../common/all-pages', true, /\.ts$/), this.moduleCacheAllPages)
    }
}
new WebApp('web-app')