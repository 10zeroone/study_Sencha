Ext.application({
	name:'MyApp',
	launch:function(){
		
		//객체 정의
		Ext.define('company', {
			//모델기능을 상속받아 기능함
			extend:'Ext.data.Model', 
			config:{
				//리스트에 바인딩될 데이터의 모델을 정의
				fields:[ 				        'company_grade', 'company_class', 'name'  ]
			
			}
		});
		
		//데이터 저장소
		var companyStore = Ext.create('Ext.data.Store', {
			model:'company',
			//정렬
			sorters:{
				property:'company_class',
				direction:'desc'
			},
			//실제 데이터를 정의하는 영역
			data:[
			      {company_grade:'차장', company_class:'영업부', name:'홍길동'},
			      {company_grade:'과장', company_class:'홍보부', name:'박문수'},
			      {company_grade:'대리', company_class:'재무부', name:'이순신'},
			      {company_grade:'부장', company_class:'개발부', name:'오징어'},
			      {company_grade:'이사', company_class:'홍보부', name:'강아지'},
			      {company_grade:'본부장', company_class:'개발부', name:'임당수'},
			      {company_grade:'선임', company_class:'인사과', name:'강랭이'},
			      {company_grade:'주임', company_class:'영업부', name:'박문수'},
			      {company_grade:'사원', company_class:'홍보부', name:'일지매'},
			      {company_grade:'파트장', company_class:'인사과', name:'강하루'},
			      {company_grade:'총무이사', company_class:'재무부', name:'최고봉'},
			      {company_grade:'부사장', company_class:'홍보부', name:'박주장'},
			      {company_grade:'대표이사', company_class:'인사과', name:'홍대리'},
			      {company_grade:'사원', company_class:'개발부', name:'문소리'}
			      
			      ]
		
		});
		
		var companyList = Ext.create('Ext.dataview.List', {
			flex:1,
			//리스트에 바인딩되도록 store 정보 지정
			store:companyStore,
			//리스트에 데이터가 표시되는 방식, 즉 템플릿을 설정
			itemTpl:'<div>직급:{company_grade} 부서:{company_class} 이름:<b>{name}</b></div>',

			//아이콘 클릭시 이벤트 처리
			onItemDisclosure:{
				//record:탭한 리스트 항목을 만들 때 사용한 Model객체
				//btn:Ext.Element객체
				//index: 탭한 리스트 항목 인덱스 번호, 첫항목의 인덱스 0
				//e는 이벤트 정보를 갖는 탭 이벤트 객체
				
				handler:function(record, btn, index, e){
					alert('직급:'+record.get('company_grade') + ', 부서:' + record.get('company_class') + ',이름:' + record.get('name') );
				}
				
			},
			
			//아이콘 표시
			onItemDisclosure:true,
			
			//이벤트 처리
			listeners:{
				//리스트를 한 번 클릭할 때
				itemtap:function(list, index, item){
					Ext.Msg.alert('안내', '선택항목은 ' + 
							' 직급:' + companyStore.data.items[index].data.company_grade + 
							', 부서:' + companyStore.data.items[index].data.company_class +
							', ' + companyStore.data.items[index].data.name
					);
				}
			}
		});
		
		
		var rootPanel=Ext.create('Ext.Panel', {
			fullscreen:true,
			layout:{
				type:'vbox', 
				align:'stretch'
			},
			items:[companyList]
		});
	}
});