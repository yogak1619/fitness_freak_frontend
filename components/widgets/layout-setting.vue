<template>
  <div>
    <!-- theme setting -->
    <div class="sidebar-btn dark-light-btn">
      <div class="dark-light">
        <div class="theme-layout-version" @click="customizeLayoutVersion()">Dark</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      layoutsidebar: false,
      activeItem: 'home',
    }
  },
  created() {
    this.$store.dispatch('layout/set')
    if (process.client) {
      this.activeColor = localStorage.getItem('color')
    }
  },
  methods: {
    customizeThemeColor(val) {
      this.$store.dispatch('layout/setColorScheme', event.target.value)
        document.documentElement.style.setProperty('--theme-deafult', event.target.value);
    },
  }
}
</script>
