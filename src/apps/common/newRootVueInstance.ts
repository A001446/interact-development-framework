import Vue from 'vue';

declare global {
    interface Window {
        rootVueInstance?: Vue;
    }
}

export default initExtensions("newRootVueInstance", (app) => {
    app.registerExtension("loaded", (ctx, page) => {
        if (window.rootVueInstance) {
            window.rootVueInstance.$destroy();
        }
        // this is the element (by class name) that pageRenderer provides to extensions
        const el = '.jaa-content-panel';
        window.rootVueInstance = new Vue({ el })
    })
})