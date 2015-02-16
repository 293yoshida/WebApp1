/**
 * Main.html用jsファイル
 */
/**
 * onLoadで呼び出すための初期化用関数
 */
function init(){




}


/**
 * ready関数内で呼び出すための関数
 */
function readyFunction(){
	headerDialog();


};


function headerDialog(){
	try{
		$('#menu').dialog({
			autoOpen: true,
			minHeight: 64,
			minWidth : 100,
			//title: 'タイトル',
			height: 100,
			//width: ($(document).width() - 20),
			width: 1100,
			position: { my: 'center top', at: 'center top+3', of: document},
			closeOnEscape: false,
			// メニューダイアログ枠をはみ出し内容物を表示する
			open: function() {
				$(this.parentNode).attr('id', 'dialog_menu').css({'overflow': 'visible'}).css({'padding-bottom': '0px'});
				$("div[aria-describedby = 'menu'] .ui-dialog-titlebar-close").hide();
				$('#menu').css({'padding-bottom':'0px'});
			}
		});

		$("div[aria-describedby = 'menu'] .ui-dialog-title").hide();
		// タイトルバーの高さ
		$("div[aria-describedby = 'menu'] .ui-dialog-titlebar").css({'padding-bottom':0, 'padding-top':0, 'height':'5px' });

		// タイトルバークリック時、メニューをたたむ
		$("div[aria-describedby = 'menu'] .ui-dialog-titlebar").bind("dblclick", function(){
			$("div[aria-describedby = 'menu'] .ui-dialog-content").toggle();
		});

		$('#mega-menu-7').dcMegaMenu({
			rowItems: '3',
			speed: 'fast',
			effect: 'slide'
		});

	}catch(e){
		alert(e);
	}finally{
	}
};