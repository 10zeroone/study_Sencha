Ext.application({
	name:'MyApp',
	launch:function(){
		//객체 생성
		var item1=Ext.create('Ext.Panel', {
			style:'background-color:pink;font-size:40px',
			html:'PINK'
		});
		var item2=Ext.create('Ext.Panel', {
			style:'background-color:green;font-size:40px',
			html:'GREEN'
		});
		var item3=Ext.create('Ext.Panel', {
			style:'background-color:red;font-size:40px',
			html:'RED'
		});
		var rootPanel=Ext.create('Ext.Panel', {
			//Ext.Viewport.add(panel); 대체 코드
			fullscreen:true,
			//패널의 기본 레이아웃
			//defaul 레이아웃은 패널의 기본 레이아웃이기 때문에 layout:'default'는 생략 가능 
			layout:'default',
			items:[item1,item2,item3]
		});
	}
});