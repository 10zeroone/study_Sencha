Ext.application({
	name:'MyApp',
	launch:function(){
		
		//모델 정의
		Ext.define('Contact', {
			extend:'Ext.data.Model', 
			config:{		
				fields:['firstName', 'lastName', 'tel', 'email']
			}
		});
		
		//데이터 저장소
		var contactStore=Ext.create('Ext.data.Store', {
			model:'Contact',
			data:[
			      {firstName:'부자', lastName:'나', tel:'010-1234-5678', email:'rich@gold.com'},
			      {firstName:'나라', lastName:'오', tel:'010-3456-7686', email:'skfk@test.com'},
			      {firstName:'해지', lastName:'김', tel:'010-2342-3432', email:'gowl@test.com'},
			      {firstName:'연기', lastName:'최', tel:'010-4545-7895', email:'dusrl@test.com'},
			      {firstName:'가자', lastName:'박', tel:'010-2334-3545', email:'rkwk@test.com'},
			      {firstName:'오자', lastName:'강', tel:'010-4534-5678', email:'dhwk@test.com'},
			      {firstName:'말자', lastName:'한', tel:'010-1234-4534', email:'akfwk@test.com'},
			      {firstName:'제길', lastName:'남', tel:'010-3454-5678', email:'user@test.com'},
			      {firstName:'두리', lastName:'송', tel:'010-6575-3454', email:'enfl@test.com'}
			      ]
		});
		
		var contactList = Ext.create('Ext.dataview.List', {
			store:contactStore,
			itemTpl:'<div>{lastName} {firstName}</div>',
			//클릭시 이벤트
			listeners:{
				//리스트를 클릭할 때
				itemtap:function(list, index, item, e){
					var model = contactStore.getAt(index);	//해당 객체 정보 가져오기
					navBar.setTitle('상세보기');
					//버튼 보이기
					btnPrev.show();
					//데이터 매칭
					detailView.setData(model.data);
					rootPanel.setActiveItem(detailView);
				}
			}
		});
		
		
		//화면이동효과를 주기 위한 Panel등록 car레이아웃을 이용해 화면 등록
		var detailView = Ext.create('Ext.Panel', {
			//스토어의 데이터를 표시
			tpl:[
			     '<div style="width:100%; padding:10px;">',
			     '이름: {lastName}{firstName}<hr>',
			     '전화번호: {tel}<hr>',
			     '이메일: {email}',
			     '</div>'
			     ]
		});		
		
		//Button객체를 생성하고 TitleBar에 등록
		var btnPrev = Ext.create('Ext.Button', {
			text:'이전',
			ui:'back',
			align:'left',
			hidden:true,	//기본값 버튼 숨기기
			handler:function(btn, event){
				navBar.setTitle('연락처 목록');
				btnPrev.hide();	//버튼 숨기기
				rootPanel.setActionItem(contactList);
			}
			
		});
		
		//TitleBar작성
		var navBar = Ext.create('Ext.TitleBar',{
			docked:'top',
			ui:'light',
			title:'연락처 목록',
			items:[btnPrev]
		});
		
		var rootPanel=Ext.create('Ext.Panel', {
			fullscreen:true,
			//화면 중첩
			layout:'card',
			items:[navBar, contactList]
		});
	}
});