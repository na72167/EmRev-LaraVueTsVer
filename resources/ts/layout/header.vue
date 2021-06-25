<template>
  <!-- ヘッダー関係 -->
  <header id="index-top" class="header js-toggle-sp-menu-target">
    <div class="header__content-wrap">
      <div>
        <HeaderTitle
          :HeaderTitle = "HeaderTitle"
        />
      </div>
      <div>
        <HeaderMenu
          :headerMenu=headerMenu
          :aboutMenu=aboutMenu
        />
      </div>
    </div>
  </header>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import HeaderTitle from './components/header/HeaderTitle';
import HeaderMenu from './components/header/HeaderMenu';

@Component({
  components: {
    HeaderTitle,
    HeaderMenu
  },
})

export default class Header extends Vue {

  private headerMenu: {
    id: string;
    text: string;
    link: string;
  };

  private headerTitle = [
    { logo: 'EmRev' }
  ];

  private headerMenuLoggedIn = [
    { text: 'MENU' },
    { text: 'REVIEW POSTING', link: '/SelectReviewCompany' },
    { text: 'LOGOUT' },
  ];

  private headerMenuNotloggedIn = [
    { text: 'LOGIN', link: '/messages' },
    { text: 'SIGNUP', link: '/groups' },
  ];

  private aboutMenu = [
    { id: '1', text: 'マイページ', link: '`/mypage/${this.loginUserId}`' },
    { id: '2', text: 'お気に入りレビュー一覧', link: '#' },
    { id: '3', text: '投稿されたレビュー一覧', link: '#' },
    { id: '4', text: '閲覧履歴', link: '#' },
    { id: '5', text: '登録社員一覧', link: '#' },
    { id: '6', text: 'パスワード変更', link: '#' },
    { id: '7', text: 'レビュー会社登録申請', link: '/ApplyCompany' },
    { id: '8', text: '退会する', link: '#' },
  ];

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

