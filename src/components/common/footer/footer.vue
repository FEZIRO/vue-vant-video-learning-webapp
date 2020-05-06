<template>
  <footer class="custom-footer">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'customFooter',
};
</script>

<style lang="scss">
.custom-footer {
  text-align: center;
  height: 100px;
  line-height: 50px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.2);
}
</style>
