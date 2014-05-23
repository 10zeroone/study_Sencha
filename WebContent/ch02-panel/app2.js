Ext.application({
	name:'MyApp',
	//뷰포트(Viewport)를 생성하는 코드를 작성
	//뷰포트는 브라우저 화면을 가득 채우는 컨테이너 컴포넌트를 의미
	//자동으로 생성되는 ViewPort의 크기는 width, height 100%
	launch:function(){
		//객체 생성
		var top=Ext.create('Ext.Panel', {
			//위치 지정
			docked:'top',
			style:'background-color:pink;font-size:40px',
			html:'TOP'
		});
		var bottom=Ext.create('Ext.Panel', {
			//위치 지정
			docked:'bottom',
			style:'background-color:green;font-size:40px',
			html:'<font color="gold">BOTTOM</font>'
		});
		var panel=Ext.create('Ext.Panel', {
			//Ext.Viewport.add(panel); 대체 코드
			fullscreen:true,
			//패널이 가질수 있는 컴포넌트 명시
			items:[top,bottom],
			html:'Panel 바탕입니다. <br>이 곳에 내용이 표시됩니다.' 
				+ '<br><font color="red">센타터치 스터디를 시작합니다.</font>' 
				+ '<br><br><br><div align="center">' 
								+ '<img src="../res/user.png" width="60" height="60"></div>'
		});
	}
});