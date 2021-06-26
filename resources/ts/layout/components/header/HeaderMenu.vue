<template>

  <div v-if="headerMenu.headerMenuLoggedIn">
    <LoginUserHeaderNav
      :headerMenu=headerMenu.headerMenuLoggedIn
    />
    <AboutMenu
      :class="aboutMenuState"
      :aboutMenu="aboutMenu"
    />
  </div>

  <nav class="header__nav" v-else-if="headerMenu.headerMenuGuests">
    <GuestsUserHeaderNav
      :headerMenu=headerMenu.headerMenuGuests
    />
  </nav>

</template>

<script lang="ts" scoped>
import { Component,Prop,Vue } from 'vue-property-decorator';
import { LoginUserHeaderNav } from '@/layout/components/header/headerNavigation/LoginUserHeaderNav';
import { GuestsUserHeaderNav } from '@/layout/components/header/GuestsUserHeaderNav';
import { AboutMenu } from '@/layout/components/header/AboutMenu';
import { toolStoreModule } from '@/store/modules/tool';
import { HeaderMenus,AboutMenus } from '@/store/models.d';

@Component({
  components: {
    LoginUserHeaderNav,
    AboutMenu,
  },
})

export default class HeaderMenu extends Vue {

  @Prop(Array)
  private headerMenu!: HeaderMenus[];

  @Prop(Array)
  private aboutMenu!: AboutMenus[];

  public changeLoginProp(){

  }

  public changeSignUpProp(){

  }

}
</script>
