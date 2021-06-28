
// ========ユーザー情報========
export interface User {
  user_id: number;
  email: string;
  roll: number;
  login_date: number;
  login_limit: number;
}

//========ヘッダー========

export interface HeaderLogo {
  logo: string
}

export interface HeaderMenus {
  text: string;
  link: string;
}

export interface AboutMenus {
  id: string,
  text: string,
  link: string
}

export type SignUpOrLogin = 'signUp' | 'login';

export type SignUp = 'signUp';

export type Login = 'login';

export type OpenAboutMenu =  'openAboutMenu' | false;
