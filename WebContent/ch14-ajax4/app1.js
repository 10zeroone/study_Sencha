Ext.application({
	name:'MyApp',
	launch:function(){
		
		//모델 만들기
		Ext.define('phone', {
			//Model 상속
			extend:'Ext.data.Model',
			config:{
				fields:['pno', 'pname', 'pimage']
			}
		});
		
		var phoneStore = Ext.create('Ext.data.Store', {
			//Model을 스토어에 적용
			model:'phone',
			proxy:{
				type:'ajax',
				url:'json_data.jsp',
				reader:{
					type:'json',
					//프로퍼티 지정
					rootProperty:'data'	//생략 가능, 생략시 [{},{}]형식으로 JSON파일 구성해야 함
				}
			},
			autoLoad:true
		});
		
		//리스트 만들기
		var phoneList = Ext.create('Ext.dataview.List', {
			store:phoneStore,
			masked:{
				xtype:'loadmask',
				message:'로딩 중...'
			},
			//itemTpl이 배열이기 때문에 +연산자를 사용하는 것이 아니라 ,를 써야 함
			itemTpl:[
			         '<div style=width:100%;>',
				         '<table style="width:100%;>',
							'<tr>',
								'<td style="width:50px;padding:5px">{pno}</td>',
								'<td style="padding-left:5px">{pname}</td>',
								'<td style="text-align:right; padding:5px">',
									'<img style="width:30px; height:50px;" src=../res/{pimage} border=0>',
								'</td>',
							'</tr>',
						'</table>',
			         '</div>'
			         ]
		});
		
		var navBar = Ext.create('Ext.TitleBar', {
			docked:'top',
			title:'폰 목록 확인'
		});
		
		
		var rootPanel=Ext.create('Ext.Panel', {
			fullscreen:true,
			layout:'fit',
			items:[navBar, phoneList]
		});
	}
});