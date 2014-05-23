Ext.application({
	name:'MyApp',
	launch:function(){
		
		var item1={
				layout:'hbox',
				items:[
				       {xtype:'button', ui:'normal', text:'normal', iconCls:'action', iconMask:true},
				       {xtype:'button', ui:'round', text:'round'},
				       //원하는 형태로 버튼 커스터마이징
				       {xtype:'button', 
				    	   height:'100',	//높이 지정
				    	   text:'<img src="../res/bug.png" width=15>Bug Icon'
				    	   }
				       ]
		};

		
		var rootPanel=Ext.create('Ext.Panel', {
			fullscreen:true,
			layout:{type:'vbox', align:'center', pack:'justify'},
			items:[item1]
		});
	}
});