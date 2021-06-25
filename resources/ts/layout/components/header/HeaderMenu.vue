<template>

  <div v-if="user">
    <nav class="header__nav">
      <!-- v-for・v-ifで表示させてもいいかも -->
      <li class="header__nav-list" @click="switchMenuState()">{{headerMenuLoggedIn.text[0]}}</li>
        <!-- TODO:ここ問題あり -->
        <router-link :to="headerMenuLoggedIn.link[1]" class="menuAbout__itemWrap-lineNone">
          <li class="header__nav-list" @click="switchMenuState()">{{headerMenuLoggedIn.text[1]}}</li>
        </router-link>
      <li class="header__nav-list" @click="logout">{{headerMenuLoggedIn.text[2]}}</li>
    </nav>

    <AboutMenu
      :class="aboutMenuState"
      :aboutMenu=aboutMenu
    />
  </div>

  <nav class="header__nav" v-else-if="!user">
    <li class="header__nav-list active-login-menu" @click="changeLoginProp">LOGIN</li>
    <li class="header__nav-list active-signup-menu" @click="changeSignUpProp">SIGNUP</li>
  </nav>

</template>

<script lang="ts" scoped>
import { Component,Prop,Vue } from 'vue-property-decorator';
import Cookies from "js-cookie";
import AboutMenu from './components/header/AboutMenu';
import { toolStoreModule } from '..../store/modules/tool';

@Component({
  components: {
    AboutMenu,
  },
})
export default class HeaderMenu extends Vue {

  private aboutMenuState: 'openAboutMenu' | false = false;
  private switchingMenuState?: 'openAboutMenu' | false;

  @Prop(Array)
  private headerMenu!: String[] | null;

  @Prop(Array)
  private aboutMenu!: String[] | null;

  private switchMenuState() {
    // aboutMenuState内の要素を反転させる。
    this.switchingMenuState = this.aboutMenuState === false ? 'openAboutMenu' : false;
    toolStoreModule.switchMenuComponent(this.switchingMenuState);
  }

}
</script>
