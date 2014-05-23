Ext.application({
	name:'MyApp',
	//뷰포트(Viewport)를 생성하는 코드를 작성
	//뷰포트는 브라우저 화면을 가득 채우는 컨테이너 컴포넌트를 의미
	//자동으로 생성되는 ViewPort의 크기는 width, height 100%
	launch:function(){
		//패널 생성
		//패널 객체 생성
						//create(객체 이름, 옵션값)
		var panel = Ext.create('Ext.Panel', {
			html:'Hello World',
			style:'background-color:#ffff00'
		});
		
		//뷰포트는 기본적으로 비어있어서 컴포넌트를 추가하면 화면을 가득 채움
		Ext.Viewport.add(panel);
	}
});