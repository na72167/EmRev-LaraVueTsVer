<template>
  <!-- タイトル -->
  <h1 class="header__title">
    <router-link to="/" class="header__title-link">
      {{title.logo}}
    </router-link>
  </h1>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HeaderTitle extends Vue {}
</script>
