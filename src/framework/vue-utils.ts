import Vue from "vue";
import { CombinedVueInstance } from "vue/types/vue";
export { Vue }

declare module "vue" {
    interface VueConstructor {
        destroyVueInstances(): void;
    }
}

const VUE_INSTANCES: CombinedVueInstance<Vue, object, object, object, Record<never, any>>[] = []

Vue.mixin({
    beforeCreate() {
        VUE_INSTANCES.push(this);
    }
});

Vue.destroyVueInstances = function () {
    let index = VUE_INSTANCES.length;
    while (index--) {
        VUE_INSTANCES[index].$destroy();
        VUE_INSTANCES.splice(index, 1);
    }
}
