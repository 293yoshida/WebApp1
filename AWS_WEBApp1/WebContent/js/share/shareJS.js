/**
 * 共通JSファイル
 */

/**
 * グローバル関数
 * 先頭文字を大文字
 */
 //ローカル関数の仮定義に必ず実装すること。ローカル関数の実装漏れ防止
function UnimplementedAlert(var funcName){
	alert("Unimplemented Function : " + funcName);
}

















/**
 * ローカル関数
 * 先頭文字を小文字
 */
//onLoadで呼び出すための初期化用関数
function init(){UnimplementedAlert("init");};
//ready関数で呼び出すための関数
function readyFunction(){UnimplementedAlert("readyFunction");};

//画面ＵＩのヘッダー部分ダイアログ
function headerDialog(){UnimplementedAlert("headerDialog");};
//画面ＵＩのメニュー部分ダイアログ
function menuDialog(){UnimplementedAlert("menuDialog");};
//画面ＵＩの設定部分ダイアログ
function configDialog(){UnimplementedAlert("configDialog");};


