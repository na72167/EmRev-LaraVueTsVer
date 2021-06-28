<template>
  <span>
    <li class="header__nav-list" @click="switchMenuState">{{ headerMenu[0].text }}</li>
    <li class="header__nav-list active-login-menu" @click="changeLoginProp">{{ headerMenu[1].text }}</li>
    <li class="header__nav-list active-signup-menu" @click="changeSignUpProp">{{ headerMenu[2].text }}</li>
  </span>
</template>
<script lang="ts" scoped>
import { Component,Prop,Vue } from 'vue-property-decorator';
import { HeaderMenus } from '@/store/models.d';

@Component
export default class GuestsUserHeaderNav extends Vue {

  @Prop(Array)
  private headerMenu!: HeaderMenus[];

  // public changeLoginProp(){

  // }

  // public changeSignUpProp(){

  // }
}
</script>
