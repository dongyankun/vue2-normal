<template>
  <div class="son">
    <div>{{ username }}</div>
    <div @click="changename">点击更改username</div>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "son",
  components: {},
})
export default class App extends Vue {
  @Prop()
  username: any;
  changename() {
    this.$emit("update:username", "1231");
  }
}
</script>

<style lang="scss" scoped>
.son {
}
</style>
