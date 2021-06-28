<template>
  <!-- ヘッダー関係 -->
  <header id="index-top" class="header js-toggle-sp-menu-target">
    <div class="header__content-wrap">
      <div>
        <HeaderTitle
          :headerTitle="headerTitle"
        />
      </div>
      <div>
        <HeaderMenu
          :headerMenu="headerMenu"
          :aboutMenu="aboutMenu"
        />
      </div>
    </div>
  </header>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import HeaderTitle from '@/layout/components/header/HeaderTitle';
import HeaderMenu from "@/layout/components/header/HeaderMenu";
import { AuthModule } from '@/store/modules/auth';
import { User,HeaderMenus,AboutMenus } from '@/store/models.d';
import { headerTitle,aboutMenus,headerMenuLoggedIn,headerMenuGuests } from '@/utils/header';
import { toolStoreModule } from '@/store/modules/tool';

@Component({
  components: {
    HeaderTitle,
    HeaderMenu
  },
})
export default class Header extends Vue {
  //TODO:挿入される要素を見直して↓の型数を減らす。
  private user: User[] | string | null | undefined = [];
  private headerTitle = headerTitle;
  private headerMenu: HeaderMenus[] = [];
  private aboutMenu: AboutMenus[] = aboutMenus;

  get checkLoginUser() {
    return this.user = AuthModule.getLoginUserDate;
  }

  get switchMenu() {
    if (this.user){
      this.headerMenu = headerMenuLoggedIn;
    }else{
      this.headerMenu = headerMenuGuests;
    };
    return
  }

}
</script>

<style lang="scss" scope>
    .header{
        height: 70px;
        background-color: #047aed;
        overflow: hidden;
        width: 100%;
        &__content-wrap{
            height: 100%;
            margin: 0 auto;
            max-width: 1100px;
        }
        &__title{
            display: inline;
            font-size: 2em;
            position: relative;
            color:#fff;
            top: calc(70px / 2 - 51px / 2);
            margin-left: 67px;
            font-weight: 300;
        }
        &__title-link{
            color:#fff;
            text-decoration: none;
            &:link{
            color:#fff;
            }
            &:visited{
            color:#fff;
            }
        }
        &__nav{
            float: right;
            position: relative;
            margin-right: 67px;
            top: calc(70px / 2 - 25px / 2);
            &-list{
            list-style-type: none;
            float: left;
            margin-right: 10px;
            color:#fff;
            &:last-child{
                margin-right: 0px;
            }
            &:hover {
                border-bottom: 2px #fff solid;
            }
            }
        }
    }
    .openAboutMenu{
      transition: all .5s;
      transform: translateX(100%);
    }
</style>
