
//========ユーザー登録関係========

// ===フォーム内への差し込み用===
export type emailErrMsg = 'メールアドレスを入力してください' |'メールアドレスの形式が正しくありません' |
'半角英数で入力してください' | 'メールアドレスは20文字以内にしてください' |
'メールアドレスは4文字以上にしてください' | 'メールアドレスが重複しています' | '';

export type passwordErrMsg = 'パスワードを入力してください' | 'パスワードは半角英数字で入力してください' |
'パスワードは20文字以内で入力してください' | 'パスワードは6文字以上入力してください' |
'確認用パスワードと一致しません' | ''

export type commonErrMsg = '接続エラーが発生しました。時間を置いたのち再度送信して下さい' | ''

export type signUpButton = '登録する' | '登録中・・・';

export interface RegistUser {
  data:{
    id: number,
    email: string,
    roll: number,
  }
}

// ===エラー時の差し込み用===

export interface EmailFormErrMsg {
  emailErrMsgEmpty: string | null;
  emailErrMsgEmailFormat: string | null;
  emailErrMsgHalfNumAlp: string | null;
  emailErrMsgMaxLen: string | null;
  emailErrMsgMinLen: string | null;
  emailErrMsgEmailDup: string | null;
}

export const EmailFormErrMsg: EmailFormErrMsg[] = [
  {
    emailErrMsgEmpty: 'メールアドレスを入力してください',
    emailErrMsgEmailFormat: 'メールアドレスの形式が正しくありません',
    emailErrMsgHalfNumAlp: '半角英数で入力してください',
    emailErrMsgMaxLen: 'メールアドレスは20文字以内にしてください',
    emailErrMsgMinLen: 'メールアドレスは4文字以上にしてください',
    emailErrMsgEmailDup: "メールアドレスが重複しています",
  },
]

export interface PasswordFormErrMsg {
  passwordErrMsgEmpty: string | null,
  passwordErrMsgHalfNumAlp: string | null,
  passwordErrMsgMaxLen: string | null,
  passwordErrMsgMinLen: string | null,
  passwordErrMsgPassMatch: string | null,
}

export const PasswordFormErrMsg: PasswordFormErrMsg[] = [
  {
    passwordErrMsgEmpty: 'パスワードを入力してください',
    passwordErrMsgHalfNumAlp: 'パスワードは半角英数字で入力してください',
    passwordErrMsgMaxLen: 'パスワードは20文字以内で入力してください',
    passwordErrMsgMinLen: 'パスワードは6文字以上入力してください',
    passwordErrMsgPassMatch: '確認用パスワードと一致しません',
  },
]

export interface CommonErrMsg {
  commonErrMsg: string,
}

export const CommonErrMsg: CommonErrMsg = {
  commonErrMsg: '接続エラーが発生しました。時間を置いたのち再度送信して下さい',
}




// Vue.jsチュートリアル　〜Vue.js + TypeScriptでTrelloもどきを作ろう①〜
// https://qiita.com/emgniddikur/items/276d9562a8dc18402a4a

// import { IList } from "@/types";

// export function createInitialLists(): IList[] {
//   return [
//     {
//       id: 1,
//       name: "リスト1",
//       cards: [
//         {
//           id: 1,
//           text: "タスク1"
//         }
//       ]
//     }
//   ]
// };
