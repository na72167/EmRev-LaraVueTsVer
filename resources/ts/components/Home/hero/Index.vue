<template>
  <section class="hero">
    <!-- テキスト関係 -->
    <div class="hero__content">
      <div class="hero__text-wrap">
        <h1 class="hero__text-catchTheam">
        Easier Deployment
        </h1>
        <div class="hero__text-about">
        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサン
        </div>
        <a class="hero__text-aboutLink" href="#index-about">このアプリについて</a>
      </div>
      <!-- TODO:ログイン機能とログアウト機能が完成した後、ifの条件をイコールに変更する。 -->
      <div class="hero__signup-loginWrap"
        v-if="!user"
      >
        <!-- TODO: v-bind:classを使ってdateに依存したスタイル(トランジションクラス使用)の設定を行う。 -->
        <SignUp
          v-if="authComponentsState === 'signUp'"
        />
        <Login
          v-if="authComponentsState === 'login'"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import SignUp from '@/components/Home/hero/auth/SignUp';
import Login from '@/components/Home/hero/auth/Login';
import { AuthModule } from '@/store/modules/auth';
import { SignUpOrLogin,User } from '@/store/models.d';

@Component({
  components: {
    SignUp,
    Login,
  },
})
export default class Hero extends Vue {
  private authComponentsState : SignUpOrLogin = 'signUp';
  //TODO:挿入される要素を見直して↓の型数を減らす。
  private user : User[] | string | null | undefined = null;

  get checkLoginUser() {
    return this.user = AuthModule.getLoginUserDate;
  }

}
</script>

<style lang="scss" scope>
  .hero{
    height: 400px;
    width: 100%;
    background-color: #047aed;
    position: relative;
    &::before{
      //ヒーローバナーの模様部分(この辺場当たり的にスタイルを当ててしまったのであとでキレイにする。)
      content: "";
      height:100px;
      width: 100%;
      background-color: #fff;
      transform: skewY(-3deg);
      position: absolute;
      bottom: -70px;
    }

    //=============================================================
    //コンテンツ全体
    //=============================================================

    &__content{
      height: 100%;
      max-width: 1100px;
      margin:0 auto;
      //基本的にはoverflow:hidden;で親要素からはみ出た際に早めに気づける様に
      //するがここのみレイアウトの都合上、overflow:visible;を使う。
      overflow: visible;
    }
    &__text-wrap{
      height: 250px;
      width: 500px;
      margin-right: 100px;
      color:#fff;
      float: left;
      position: relative;
      top: 100px;
      text-align: center;
    }
    &__text-catchTheam{
      font-size: 40px;
      font-weight: 300;
      line-height: 1.2;
      margin:20px 0;
    }
    &__text-aboutLink{
      border: 1px #fff solid;
      border-radius: 5px;
      padding: 10px 30px;
      position: relative;
      top: 20px;
      text-decoration:none;
      &:link{
      color:#fff;
      }
      &:visited{
      color:#fff;
      }
      &:hover{
      transition: all .5s;
      background-color: #fff;
      color: #047aed;
      }
    }
      // //jsアニメーション用クラス
      // .hidden{
      //     transform: translateY(130%);
      // }
  }
</style>
