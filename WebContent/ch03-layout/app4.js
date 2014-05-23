Ext.application({
	name:'MyApp',
	launch:function(){
		var item1=Ext.create('Ext.Panel', {
			//비율 지정
			flex:1,
			style:'background-color:red;color:white;',
			html:'flex:1'
		});
		var item2=Ext.create('Ext.Panel', {
			//비율 지정
			flex:2,
			style:'background-color:orange;color:white;',
			html:'flex:2'
		});
		var item3=Ext.create('Ext.Panel', {
			//비율 지정
			flex:1,
			style:'background-color:green;color:white;',
			html:'flex:1'
		});
		
		
		var rootPanel = Ext.create('Ext.Panel', {
			fullscreen:true,
			//stretch: 동등 배치
			layout:{type:'hbox', align:'stretch', pack:'center'},
			items:[item1,item2,item3]
		});
	}
});
