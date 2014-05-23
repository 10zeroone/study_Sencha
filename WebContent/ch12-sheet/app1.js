Ext.application({
	name:'MyApp',
	launch:function(){
		
		var loginForm = Ext.create('Ext.form.Panel', {
			layout:{
				type:'vbox',
				align:'stretch'
			},
			items:[
			       {xtype:'textfield', name:'mid', value:'user', label:'아이디'},
			       {xtype:'passwordfield', name:'mpassword', value:'1234', label:'비밀번호'},
			       {xtype:'spacer'},
			       {
			    	   xtype:'panel',
			    	   layout:{type:'hbox', align:'center', pack:'center'},
			    	   items:[
			    	          {xtype:'button', text:'로그인', ui:'decline', width:100},
			    	          {xtype:'spacer', width:20},
			    	          {xtype:'button', text:'취소', ui:'decline', width:100,
			    	        	  handler:function(){
			    	        		  //sheet 감추기
			    	        		  sheet.hide();
			    	        	  }}
			    	          ]
			    	}
			       ]
		});
		
		//sheet 생성
		var sheet = Ext.create('Ext.Sheet', {
			left:0,
			right:0,
			bottom:0,
			height:200,
			//내용이 꽉차게 표시
			layout:'fit',
			items:[loginForm]
		});
		
		//sheet를 표시하는 Toolbar생성
		var toolbar = Ext.create('Ext.Toolbar', {
			docked:'top',
			items:[
			       {
			    	   text:'로그인',
			    	   ui:'confirm',
			    	   handler:function(){
			    		   //sheet 보여주기 : Viewport에 추가 후 show()호출 
			    		   Ext.Viewport.add(sheet);
			    		   sheet.show();
			    	   }
			       }
			       ]
		});
		
		var rootPanel=Ext.create('Ext.Panel', {
			fullscreen:true,
			items:[toolbar]
		});
	}
});