
import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators';

import store from '@/store';
import Cookies from "js-cookie";
import { User } from '@/store/models.d'

@Module({
  dynamic: true,
  store,
  name: 'AuthModule',
  namespaced: true,
})

class Auth extends VuexModule {
  //TODO:挿入される要素を見直して↓の型数を減らす。
  private user : User[] | string | null | undefined = null;

  @Mutation
  private SET_LOGIN_USER(): void{
    this.user = Cookies.get('user_id');
  }

  get getLoginUserDate(): User[] | string | null | undefined{
    return this.user;
  }

  @Action
  public setLoginUser(): void {
    this.SET_LOGIN_USER()
  }

}
export const AuthModule = getModule(Auth);
