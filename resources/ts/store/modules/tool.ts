import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators';

// interface Menu {
//     title: string;
// }

// export type SnackbarType = 'error' | 'info' | 'success' | undefined;
// export interface SnackbarCreateAction {
//     message: string;
//     type: SnackbarType;
// }

// const actionDecOptions = {
//     rawError: true,
// };

import store from '@/store';

@Module({
  dynamic: true,
  store,
  name: 'tool',
  namespaced: true,
})

class ToolStore extends VuexModule {

  private loading: boolean = false
  private aboutMenuState: 'openAboutMenu' | false = false

  get isLoading(): boolean {
    return this.loading;
  }

  get isAboutMenuState(): string | boolean {
    return this.aboutMenuState;
  }

  @Mutation
  private SET_LOADING(): void{
    this.loading = true;
  }

  @Mutation
  private CLEAR_LOADING(): void{
    this.loading = false;
  }

  @Mutation
  private SWITCH_MENU(val: 'openAboutMenu' | false): void{
    this.aboutMenuState = val;
  }

  @Action
  public setLoading(): void {
    this.SET_LOADING();
  }

  @Action
  public switchMenuComponent(val: 'openAboutMenu' | false): void {
    this.SWITCH_MENU(val);
  }

}
export const toolStoreModule = getModule(ToolStore);
