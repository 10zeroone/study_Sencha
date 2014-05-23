Ext.application({
	name:'MyApp',
	launch:function(){
		
		//이벤트 처리 함수 분리
		var eventHandler = function(button, event){
			var xValue = Ext.getCmp('x').getValue();
			var yValue = Ext.getCmp('y').getValue();
			
			//로드 마스크(loadmask) 생성 및 등록 (setMasked)
			Ext.Viewport.setMasked({
				xtype:'loadmask',
				message:'계산 중...'
			});
			
			//데이터 매칭
			//비동기 통신
			Ext.Ajax.request({
				//호출할 URL
				url:'calculator.jsp',
				params:{x:xValue, y:yValue},
				success:function(response){
					//loadmask 해제
					Ext.Viewport.setMasked(false);
					Ext.Msg.alert('알림', '계산결과: ' + response.responseText, Ext.emptyFn);
				},
				failure:function(response){
					//loadmask 해제
					Ext.Viewport.setMasked(false);
					Ext.Msg.alert('알림', '계산오류: ' + response.status, Ext.emptyFn);
				}
			});
		};
		
		//툴바 생성
		var toolbar = Ext.create('Ext.Toolbar', {
			docked:'top',
			items:[
			       {
			    	   text:'계산하기',
			    	   ui:'confirm',
			    	   handler:eventHandler
			       }
			       ]
		});
		
		//폼 생성
		var formPanel = Ext.create('Ext.form.Panel', {
			items:[
			       {id:'x', xtype:'textfield', name:'x', label:'x'},
			       {id:'y', xtype:'textfield', name:'y', label:'y'}
			       
			       ]
		});
		
		var rootPanel=Ext.create('Ext.Panel', {
			fullscreen:true,
			layout:'fit',
			items:[toolbar, formPanel]
		});
	}
});