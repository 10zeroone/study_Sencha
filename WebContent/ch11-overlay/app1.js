Ext.application({
	name:'MyApp',
	launch:function(){
		
		//오버레이용 툴바
		var overlayToolbar =Ext.create('Ext.Toolbar', {
			docked:'top',
			title:'Overlay',
			items:[
			       {xtype:'spacer'},
			       {
			    	   text:'닫기',
			    	   ui:'decline-round',
			    	   handler:function(btn, event){
			    		   overlay.hide();
			    	   }
			       }
			       ]
		});
		
		//오버레이용 패널 생성
		var overlay = Ext.create('Ext.Panel', {
			//오버레이를 띄울 수 있는지 여부
			floating:true,
			//모달 여부 지정 (true: 자식창을 닫기전에는 부모창를 클릭할 수 없음)
			modal:true,
			//부모패널을 탭할 수 있는지 여부
			hideOnMaskTap:false,
			//숨김 기본 지정
			hidden:true,
			width:400,
			height:400,
			//스크롤 여부
			scrollable:true,
			scroll:'vertical',
			items:overlayToolbar,
			contentEl:'overlayid'
			
		});
		
		
		var rootPanel=Ext.create('Ext.Panel', {
			fullscreen:true,
			items:[
			       //루트 패널의 툴바 생성
			       {
			    	   docked:'top',
			    	   xtype:'toolbar',
			    	   items:[
			    	          {
			    	        	  text:'버튼 Overlay 보여주기',
			    	        	  handler:function(btn, event){
			    	        		  overlay.setCentered(false);
			    	        		  overlayToolbar.setTitle('버튼에 위치한 Overlay');
			    	        		  overlay.showBy(btn);
			    	        	  }
			    	          },
			    	          //공백 주기
			    	          {xtype:'spacer'},
			    	          {
			    	        	text:'가운데 Overlay 보여주기',
			    	        	handler:function(btn, event){
			    	        		overlay.setCentered(true);
			    	        		overlayToolbar.setTitle('가운데 위치한 Overlay');
			    	        		Ext.Viewport.add(overlay);
			    	        		overlay.show();
			    	        	}
			    	          }
			    	          ]
			       }
			      ],
			      html:'Overlay를 보여주는 예제입니다.'
		});
	}
});