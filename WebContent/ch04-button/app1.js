Ext.application({
	name:'MyApp',
	launch:function(){
/*
Button의 속성
속성	설명
text	버튼의 글자
ui	버튼의 모양과 색상 등의 스타일
	크기 형태 제어
	round
	small
	decline
	decline-round
	decline-small
	confirm
	confirm-round
	decline-small
	action
	action-round
	action-small
	back
	forward
	
iconCls	아이콘 종류를 지정하는 CSS클래스
	action
	add
	arrow_up
	arrow_down
	arrow_left
	compos
	delete
	refresh
	reply
	search
	star
	trash
	bookmarks
	download
	favorites,
	info
	more
	settings
	team
	time
	user
	home
	locate
	
iconMask	아이콘 표시 여부
iconAlign	아이콘 정렬
	left
	right
badgeText	뱃지를 추가
handler	버튼의 이벤트 핸들러
		
		
*/		
		//rootPanel에 추가시 동등한 Panel로 인식하게 됨
		var item1={
				//객체의 타입을  panel로 지정
				//xtype:'panel'
				//Panel에 item으로 지정하게 되므로 부모의 panel객체를 상속받게 되므로 xtype:'panel', 생략가능
				layout:'hbox',
				items:[
				      {xtype:'button', ui:'normal', text:'normal', iconCls:'action', iconMask:true,
				    	handler:function(){
				    		//경고창
				    		Ext.Msg.alert('Message', 'Hellow Sencha', Ext.emptyFn);
				    	}},
				      {xtype:'button', ui:'round', text:'round'},
				      {xtype:'button', ui:'small', text:'small'}
				      ]
		};
		
		var item2={
				layout:'hbox',
				items:[
				      {xtype:'button', ui:'decline',text:'decline', iconCls:'home',iconMask:true},
				      {xtype:'button', ui:'decline-round',text:'decline-round'},
				      {xtype:'button', ui:'decline-small',text:'decline-small'}
				      ]
		};
		
		var item3={
				layout:'hbox',
				items:[
				      {xtype:'button', ui:'confirm',text:'decline', iconCls:'locate',iconMask:true, badgeText:'2'},
				      {xtype:'button', ui:'confirm-round',text:'confirm-round'},
				      {xtype:'button', ui:'confirm-small',text:'confirm-small'}
				      ]
		};
		
		var item4={
				layout:'hbox',
				items:[
				      {xtype:'button', ui:'action',text:'action', iconCls:'favorites',iconMask:true},
				      {xtype:'button', ui:'action-round',text:'action-round'},
				      {xtype:'button', ui:'action-small',text:'action-small'}
				      ]
		};
		
		var rootPanel=Ext.create('Ext.Panel', {
			fullscreen:true,
			layout:{type:'vbox', align:'center', pack:'justify'},
			items:[item1,item2,item3, item4]
		});
	}
});