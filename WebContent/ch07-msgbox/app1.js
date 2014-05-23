Ext.application({
	name:'MyApp',
	launch:function(){
/*		
Message박스 용도
alert	일바넉인 정보를 표시하는 메시지 박스(OK버튼)
confirm	확인을 요구하는 질문 형식의 메시지 박스(Yes, No버튼)
prompt	사용자의 입력을 요구하는 메시지 박스(OK, Cancel버튼)

메시지 박스 매개변수
Ext.Msg.alert(타이틀, 메시지, 콜백함수)
타이틀	메시지 박스 타이틀, 문자열
메시지	문자열
콜백 함수	메시지 박스가 닫힐 때 실행될 함수,	특별히 콜백함수가 필요 없을 경우 Ext.emptyFn지정
		
		
*/
		var btnAlert = Ext.create('Ext.Button',{
			text:'Alert',
			ui:'confirm',
			handler:function(){
				Ext.Msg.alert('알림', '로그인되었습니다', Ext.emptyFn);
			}
		});
		var btnConfirm = Ext.create('Ext.Button',{
			text:'Confirm',
			ui:'confirm',
			handler:function(){
				Ext.Msg.confirm('확인', '자바스크립트가 재미있습니까?', function(buttonId){
					//buttonId: yes or no
					if(buttonId == 'yes'){
						console.log('예를 눌렀군요! 당신은 진정한 프로그래머~');
					}else{
						console.log('아니오를 눌렀군요! 더 공부하세요~');
					}
				});
			}
			
		});
		var btnPrompt = Ext.create('Ext.Button',{
			text:'Prompt',
			ui:'confirm',
			handler:function(){
				Ext.Msg.prompt('입력', '당신이 좋아하는 과일은?', function(buttonId, value){
					//buttonId: ok or cancel
					//value: 입력한 데이터
					if(buttonId=='ok'){
						console.log('입력한 내용: ' + value);
					}
				});
				
			}
		});
		
		var toolbar=Ext.create('Ext.Toolbar', {
			docked:'top',
			items:[btnAlert,btnConfirm,btnPrompt]
			
		});
		
		var rootPanel=Ext.create('Ext.Panel', {
			fullscreen:true,
			items:[toolbar]
		});
	}
});