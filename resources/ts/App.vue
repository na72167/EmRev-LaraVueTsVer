<template>
  <div>
    <Header/>
    <!-- TODO:v-show="loading"の実装 -->
      <div class="#">
        <RouterView />
      </div>
    <Footer/>
  </div>
</template>
<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>
