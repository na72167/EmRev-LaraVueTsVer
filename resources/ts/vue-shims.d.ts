// declare module '何らかのパス' を使ってプロジェクトのモジュールをグローバルに宣言することができます。
// https://qiita.com/Nossa/items/726cc3e67527e896ed1e
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}
