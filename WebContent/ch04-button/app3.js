Ext.application({
	name:'MyApp',
	launch:function(){
		
		//버튼 그룹
		var segmentedButton1=Ext.create('Ext.SegmentedButton', {
			//복수 선택 여부 지정
			allowMultiple:false,
			//pressed:true	:선택된 형태로 초기화
			items:[
			       //segmentedButton1의 자식 객체는 button타입이 오므로 xtype:'button'는 생략가능
			       {text:'Button1', ui:'decline', pressed:true},
			       {text:'Button2', ui:'decline'},
			       {text:'Button3', ui:'decline'}
			       ],
			 listeners:{
				 toggle:function(segmentedButton, button, pressed){
					 Ext.Msg.alert('알림', button.getText() + ':' + (pressed?'on':'off'), Ext.emptyFn);
				 }
			 }
		});
		
		var segmentedButton2={
				xtype:'segmentedbutton',
				allowMultiple:true,
				items:[
				      {text:'Button4', ui:'confirm', iconCls:'locate', iconMask:true},
				      {text:'Button5', ui:'confirm', iconCls:'settings', iconMask:true}
				       ],
				 listeners:{
					 toggle:function(segmentedButton, button, pressed){
						 Ext.Msg.alert('알림', button.getText() + ':' + (pressed?'on':'off'),Ext.emptFn);
					 }
				 }
		}
		
		var toolbar = {
				xtype:'toolbar',
				docked:'top',
				title:'버튼 그룹',
				items:[segmentedButton1]
		};

		
		var rootPanel=Ext.create('Ext.Panel', {
			fullscreen:true,
			layout:{type:'vbox', align:'center', pack:'center'},
			items:[toolbar, segmentedButton2]
		});
	}
});