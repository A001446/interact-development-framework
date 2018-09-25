import Vue, { ComponentOptions } from "vue";
import { CombinedVueInstance } from "vue/types/vue";

const vueInstances: CombinedVueInstance<Vue, object, object, object, Record<never, any>>[] = []

export const newVueInstance = (config: ComponentOptions<Vue>) => {
    const vue = new Vue(config)
    vueInstances.push(vue)
    return vue
}

export const destroyVueInstances = () => {
    let index = vueInstances.length
    while (index--) {
        vueInstances[index].$destroy()
        vueInstances.splice(index, 1)
    }
}