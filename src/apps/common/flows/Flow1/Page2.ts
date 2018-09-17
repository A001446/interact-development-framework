import Vue from 'vue'
import h1h3 from './components/h1h3-component.vue'
import buttonCounter from './components/button-counter.vue'

export const loaded: IDF.Extension.VoidOutput = ({ ctx, page }) => {
    console.log('Common App, Flow1/Page2 loaded event')
}

export const pageRenderer: IDF.Extension.JQueryOutput = ({ ctx, page }) => {
    console.log('Common App, Flow1/Page2 pageRenderer event')
    // register any Vue components
    Vue.component("h1h3-component", h1h3)
    Vue.component("button-counter", buttonCounter)
    // manipulate DOM as needed
    page.append("<h1h3-component></h1h3-component>")
    page.append("<button-counter></button-counter>")
    return page;
}