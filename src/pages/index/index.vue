<template>
  <div class="index">
    <son :username.sync="value"></son>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import son from "@/components/son.vue";

@Component({
  name: "index",
  components: { son },
})
export default class App extends Vue {
  value: any = "默认value";
}
</script>

<style lang="scss" scoped>
.index {
  .name {
    color: #fff;
  }
}
</style>
