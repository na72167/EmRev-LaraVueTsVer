<template>

  <span>
    <nev v-if="headerMenu[0].type === 'LoggedIn'">
      <LoginUserHeaderNav
        :headerMenu=headerMenu
      />
      <AboutMenu
        :class="aboutMenuState"
        :aboutMenu="aboutMenu"
      />
    </nev>

    <!-- TODO:・・・コンポーネントの再定義が上手く出来ていない。 -->
    <nav class="header__nav" v-else-if="headerMenu[0].type === 'Guests'">
      <GuestsUserHeaderNav
        :headerMenu="headerMenu"
      />
      <AboutMenu
        :class="aboutMenuState"
        :aboutMenu="aboutMenu"
      />
    </nav>
  </span>

</template>

<script lang="ts" scoped>
import { Component,Prop,Watch,Vue } from 'vue-property-decorator';
import LoginUserHeaderNav from '@/layout/components/header/headerNavigation/LoginUserHeaderNav';
import GuestsUserHeaderNav from '@/layout/components/header/headerNavigation/GuestsUserHeaderNav';
import AboutMenu from '@/layout/components/header/AboutMenu';
import { toolStoreModule } from '@/store/modules/tool';
import { HeaderMenus,AboutMenus } from '@/store/models.d';
import { OpenAboutMenu } from '@/store/models.d'

@Component({
  components: {
    LoginUserHeaderNav,
    GuestsUserHeaderNav,
    AboutMenu
  },
})

export default class HeaderMenu extends Vue {

  private aboutMenuState: OpenAboutMenu = false;

  @Prop(Array)
  private headerMenu!: HeaderMenus[];

  @Prop(Array)
  private aboutMenu!: AboutMenus[];


  // @Watch(this.headerMenu)
  // private name() {
  //   this.aboutMe = this.headerMenu
  // }


  get getAboutMenuState(){
    return this.aboutMenuState = toolStoreModule.isAboutMenuState
  }

  // public changeLoginProp(){

  // }

  // public changeSignUpProp(){

  // }

}
</script>
