Ext.application({
	name:'MyApp',
	launch:function(){
		var imagePanel = Ext.create('Ext.Panel', {
			html:'<img src="../res/image1.png">',
			scrollable:'both'
		});
		
		var rootPanel = Ext.create('Ext.Panel', {
			fullscreen:true,
			//하나의 컴포넌트를 꽉 채우는 레이아웃
			layout:'fit',
			items:imagePanel
			//items:[imagePanel]  동일구분
		});
	}
});
