import axios from "axios";
/**
 * 小文字の文字列か検証する
 */
export function validLowerCase(str: string): boolean{
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/**
 * 大文字の文字列を検証する
 */
export function validUpperCase(str: string): boolean{
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/**
 * 文字列にアルファベットだけが含まれているかどうかを調べる
 */
export function validAlphabets(str: string): boolean{
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/**
 * メールアドレスの検証
 */
export function validEmail(email: string): boolean{
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/**
 * メールアドレスの重複検証
 */
export async function validEmailDup(email: string) {
  // request内でのキー割り振り
  const query = {
    'email': email
  }
  const response = await axios.post('/api/emailDup',query);
  // TODO:重複が合った場合のresponseの内容の確認
  // 重複が合った場合はtrueを返す処理を書く。
  console.dir(response);
  return response
}

/**
 * パスワードの検証
 */
export function validPassword(password: string): boolean{
    const re = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,20}$/;
    return re.test(password);
}

/**
 * 数値を検証する
 */
export function validNum(num: string): boolean{
  const re = /^[0-9]+$/;
  return re.test(num);
}

/**
 * 数字の先頭が0でないことを確認する
 */
export function validNonLeadingZero(num: string) {
    return num.toString()[0] !== "0";
}

/**
 * 郵便番号の検証
 */
export function validZip(zip: string): boolean{
  const re = /^\d{3}[-]\d{4}$|^\d{3}[-]\d{2}$|^\d{3}$/;
  return re.test(zip);
}

/**
 * 電話番号の検証
 */
export function validTel(tel: string): boolean{
  const re = /^0\d{1,4}-\d{1,4}-\d{3,4}$/
  return re.test(tel);
}

/**
 * 半角英数字であるかを検証にする
 */
export function validHalfNumAlp(halfNumAlp: string): boolean{
  const re = /^[0-9a-zA-Z]*$/
  return re.test(halfNumAlp);
}

/**
 * 半角数字であるかを検証する
 */
export function validNumber(num: string): boolean{
    const re = /^[0-9]+$/
    return re.test(num);
  }

/**
 * 空白かどうかを検証する
*/
export function validWhiteSpace(str: string): boolean{
  const re = /^[\x20\u3000]+$/
  return re.test(str)
}

/**
 * 最大文字数の検証
 */
export function validMaxLen(str: string,maxNum: number): boolean{
  if(str.length >= maxNum){
    return true
  } else {
    return false
  }
}

/**
* 最小文字数の検証
*/
export function validMinLen(str: string,minNum: number): boolean{
  if(str.length <= minNum){
    return true
  } else {
    return false
  }
}
