//TODO:フォルダ名、ファイル名共にもう少しいい感じにする。

// TypeScript の Interface と Type Alias の違い
// https://qiita.com/sotszk/items/efe32e07e52dce329653

export interface HeaderTitle {
  logo: string;
}

export interface HeaderMenuLoggedIn {
  type: 'LoggedIn';
  text: string;
  link: string;
}

export interface HeaderMenuGuests {
  type: 'Guests';
  text: string;
  link: string;
}

export interface AboutMenus {
  id: string;
  text: string;
  link: string;
}

export const headerTitle: HeaderTitle[] = [
  { logo: 'EmRev' },
];

export const headerMenuLoggedIn: HeaderMenuLoggedIn[] = [
  { type: 'LoggedIn', text: 'MENU', link: '#' },
  { type: 'LoggedIn', text: 'REVIEW POSTING', link: '/SelectReviewCompany' },
  { type: 'LoggedIn', text: 'LOGOUT', link: '#' },
];

export const headerMenuGuests: HeaderMenuGuests[] = [
  { type: 'Guests', text: 'MENU', link: '#' },
  { type: 'Guests', text: 'LOGIN', link: '/messages' },
  { type: 'Guests', text: 'SIGNUP', link: '/groups' },
];

export const aboutMenus: AboutMenus[] = [
  { id: '1', text: 'マイページ', link: '`/mypage/${this.loginUserId}`' },
  { id: '2', text: 'お気に入りレビュー一覧', link: '#' },
  { id: '3', text: '投稿されたレビュー一覧', link: '#' },
  { id: '4', text: '閲覧履歴', link: '#' },
  { id: '5', text: '登録社員一覧', link: '#' },
  { id: '6', text: 'パスワード変更', link: '#' },
  { id: '7', text: 'レビュー会社登録申請', link: '/ApplyCompany' },
  { id: '8', text: '退会する', link: '#' },
];
