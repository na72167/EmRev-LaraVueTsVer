<template>
  <span>
    <li class="header__nav-list active-login-menu" @click="changeLoginProp">{{ headerMenu.headerMenuGuests.text[0] }}</li>
    <li class="header__nav-list active-signup-menu" @click="changeSignUpProp">{{ headerMenu.headerMenuGuests.text[1] }}</li>
  </span>
</template>
<script lang="ts" scoped>
import { Component,Prop,Vue } from 'vue-property-decorator';
import { HeaderMenus } from '@/store/models.d';

@Component
export default class GuestsUserHeaderNav extends Vue {

  @Prop(Array)
  private headerMenu!: HeaderMenus[];

  public changeLoginProp(){

  }

  public changeSignUpProp(){

  }
}
</script>
