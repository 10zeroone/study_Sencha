Ext.application({
	name:'MyApp',
	launch:function(){
		
		var carousel = Ext.create('Ext.Carousel', {
			direction:'vertical',
			//direction:'horizontal',
			indicator:true,
			items:[
			       	{
			       		title:'Tab1',
			       		html:'<div align=center><img src="../res/Chrysanthemum.jpg" width=200 height=150><br><br>국화</div>'
			       	},
			       	{
			       		title:'Tab1',
			       		html:'<div align=center><img src="../res/Hydrangeas.jpg" width=200 height=150><br><br>수국</div>'
			       	},
			       	{
			       		title:'Tab1',
			       		html:'<div align=center><img src="../res/Tulips.jpg" width=200 height=150><br><br>듈립</div>'
			       	}
			       ]
		});
		
		var rootPanel=Ext.create('Ext.Panel', {
			fullscreen:true,
			layout:{type:'vbox', align:'stretch', pack:'center'},
			defaults:{
				flex:1
			},
			items:[carousel]
		});
	}
});