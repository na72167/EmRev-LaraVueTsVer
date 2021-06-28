
<template>
  <div>
    <Hero/>
    <Review/>
    <About/>
    <Contact/>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import Hero from '@/components/Home/hero/Index';
import Review from '@/components/Home/review/Index';
import About from '@/components/Home/about/Index';
import Contact from '@/components/Home/contact/Index';

@Component({
  components: {
    Hero,
    Review,
    About,
    Contact
  },
})
export default class Home extends Vue {}
</script>
