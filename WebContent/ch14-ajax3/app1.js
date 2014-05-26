Ext.application({
	name:'MyApp',
	launch:function(){
		
		var eventHandler = function(button, event){
			Ext.Viewport.setMasked({
				xtype:'loadmask',
				message:'로드 중...'
			});
			
			
			Ext.Ajax.request({
				url:'json_data.jsp',
				dataType:'json',
				success:function(response, options){
					//로드 마스크 해제
					Ext.Viewport.setMasked(false);
					
					//데이터를 JSON형태인 배열형태로 인식해서 받음
					var phoneArray = Ext.JSON.decode(response.responseText, true);
					
					//데이터 넘겨주기
					if(phoneArray!=null){
						displayPhoneList(phoneArray);
					}
				},
				failure:function(response, options){
					//로드 마스크 해제
					Ext.Viewport.setMasked(false);
					Ext.Msg.alert('알림','실패: ' + response.status, Ext.emptyFn);
				}
			});
			
		};
		
		//리스트만들때 리스트안의 테이블을 만들 함수 정의
		function displayPhoneList(phoneArray){
			//초기화
			listPanel.removeAll(true);
			
			for(var i=0; i<phoneArray.length; i++){
				var phone = phoneArray[i];
				var pno = phone.pno;
				var pname = phone.pname;
				var pimage = phone.pimage;
				
				var item = {
						html:'<table style=width:100%;border:1px;border-bottom-style:solid;>' +
							'<tr>' +
								'<td style=width:50px;padding:5px>' + pno + '</td>' +
								'<td style=padding-left:5px>' + pname + '</td>' +
								'<td style=text-align:right; padding:5px>' + 
									'<img style=width:30px; height:50px; src=../res/' + pimage +
									' border=0>' +
								'</td>' +
							'</tr>' +
						'</table>'
				};
				
				listPanel.add(item);
			}
		}
		
		var toolbar = Ext.create('Ext.Toolbar', {
			docked:'top',
			items:{
				text:'Ajax-JSON 통신',
				ui:'confirm',
				handler:eventHandler
			}
		});
		
		var listPanel = Ext.create('Ext.Panel');
		
		//패널을 붙이는 형태
		
		var rootPanel=Ext.create('Ext.Panel', {
			fullscreen:true,
			items:[toolbar, listPanel]
		});
	}
});