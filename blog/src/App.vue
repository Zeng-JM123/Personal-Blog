<template>
  <div id="app">
    <router-view/>
    <loading v-if="this.$store.state.loading.isShow"/>
  </div>
</template>

<script>
import loading from '@/components/loading/loading'
export default {
  components: {
    loading
  }
}
</script>