jQuery(function($){
  var $demo1 = $('#demo1');  //コンテナとなる要素を指定
  
  $demo1.imagesLoaded(function(){   //imagesLoadedを使用し、画像が読み込みまれた段階でMasonryの関数を実行させる
    //Masonryの関数↓
    $demo1.masonry({      //オプション指定箇所
      itemSelector: '.item',  //コンテンツを指定
      columnWidth: 205,    //カラム幅を設定
      fitWidth: true,          //コンテンツ数に合わせ親の幅を自動調整
    });
  });
});