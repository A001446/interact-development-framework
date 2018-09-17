<template>
    <div>
        <button v-on:click='count++'>You clicked me {{ count }} times.</button>
    </div>
</template>

<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
  data: () => {
    return {
      count: 0
    };
  }
});
</script>
