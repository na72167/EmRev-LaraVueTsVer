import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators';

interface User {
  user_id: number;
  email: string;
  roll: number;
  login_date: number;
  login_limit: number;
}

export type SnackbarType = 'error' | 'info' | 'success' | undefined;
import store from '@/store';
import Cookies from "js-cookie";

@Module({
  dynamic: true,
  store,
  name: 'messages',
  namespaced: true,
})

class LoginUser extends VuexModule {

  private user: User[] = [];

  @Mutation
  private SET_LOGIN_USER(): void{
    this.user = Cookies.get('user_id');
  }

  @Action
  private setLoginUser(): void {
    this.SET_LOGIN_USER()
  }

}
export const User = getModule(LoginUser);
