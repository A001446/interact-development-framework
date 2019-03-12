<template>
    <div>
        <h1> This is your first component in Vue </h1>
        <h3> {{ webpack }} </h3>
    </div>
</template>

<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    webpack: "Powered by webpack!"
  })
});
</script>
