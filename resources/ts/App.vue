<template>
  <div>
    <Header/>
      <div class="#" v-show="loading">
        <RouterView />
      </div>
    <Footer/>
  </div>
</template>
<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import Header from './layout/header';
import Footer from './layout/footer';

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>
