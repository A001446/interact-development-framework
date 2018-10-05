import BaseApp from '../../framework/base-app';
class MobileApp extends BaseApp {
    cacheRequiredModules() {
        this.cacheModules(require.context('../common/flows', true, /\.ts$/), this.moduleCacheByPageName)
        this.cacheModules(require.context('./flows/', true, /\.ts$/), this.moduleCacheByPageName)
        this.cacheModules(require.context('../common/all-pages', true, /\.ts$/), this.moduleCacheAllPages)
    }
}
new MobileApp('mobile-app')