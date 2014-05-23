Ext.application({
	name:'MyApp',
	launch:function(){
		
		var formPanel=Ext.create('Ext.form.Panel', {
			items:[
				       {
				    	   xtype:'fieldset',
				    	   title:'입사지원서',
				    	   instructions:'각 항목을 적어서 인사과에 제출하세요.',
				    	   defaults:{	//모든 폼태그에 적용
				    		   required:true,	//UI만 필수로 보여지도록 처리
				    		   labelAlign:'left'
				    	   },
				    	   items:[
					    	          {
					    	        	  xtype:'textfield',
					    	        	  name:'name',
					    	        	  id:'name',
					    	        	  label:'이름',
					    	        	  clearIcon:true
					    	          },
					    	          {
					    	        	  xtype:'datepickerfield',
					    	        	  //실제월은 입력 월 +1로 표시
					    	        	  //월/일/년으로 표시되는 순서는 바꾸지 못함
					    	        	  value:new Date(2020,11,6),
					    	        	  picker:{
					    	        		  yearFrom:1950,
					    	        		  yearTo:2050,
					    	        		  slotOrder:['year','month','day']
					    	        	  },
					    	        	  name:'birthday',
					    	        	  id:'birthday',
					    	        	  label:'생년월일'
					    	          },
					    	          {
					    	        	  xtype:'checkboxfield',
					    	        	  name:'mili',
					    	        	  label:'군필여부',
					    	        	  //체크하면 전달되는 값지정
					    	        	  value:true,
					    	        	  checked:true
					    	        		  
					    	          },
					    	          {
					    	        	  xtype:'spinnerfield',
					    	        	  name:'spinner',
					    	        	  id:'spinner',
					    	        	  increment:1,
					    	        	  maxValue:60,
					    	        	  minValue:0,
					    	        	  label:'경력'
					    	          },
					    	          {
					    	        	  xtype:'selectfield',
					    	        	  name:'malefemale',
					    	        	  id:'malefemale',
					    	        	  label:'성별',
					    	        	  options:[
					    	        	           {text:'남자', value:'1'},
					    	        	           {text:'여자', value:'2'}
					    	        	           ]
					    	          },
					    	          {
					    	        	  xtype:'numberfield',
					    	        	  id:'age',
					    	        	  name:'age',
					    	        	  label:'나이',
					    	        	  value:20,
					    	        	  maxValue:200,
					    	        	  minValue:1
					    	          },
					    	          {
					    	        	  xtype:'emailfield',
					    	        	  name:'email',
					    	        	  id:'email',
					    	        	  label:'이메일',
					    	        	  placeHolder:'test@test.com',
					    	        	  clearIcon:true
					    	          },
					    	          {
					    	        	  xtype:'urlfield',
					    	        	  name:'url',
					    	        	  id:'url',
					    	        	  lable:'홈페이지',
					    	        	  placeHolder:'http://www.test.com',
					    	        	  clearIcon:true
					    	          },
					    	          {
					    	        	  xtype:'sliderfield',
					    	        	  name:'moneyslider',
					    	        	  value:0,
					    	        	  maxValue:10000,
					    	        	  minValue:0,
					    	        	  label:'희망연봉',
					    	        	  listeners:{
//					    	        		  me:전체슬라이더 객체
//					    	        		  slider: 슬라이더의 특정 지점
//					    	        		  thumb: 슬라이더를 움직이게 하는 컨트롤
//					    	        		  newValue: 새값
//					    	        		  oldValue: 예전값
					    	        		  change:function(me, slider, thumb, newValue, oldValue){
					    	        			  			//id
					    	        			  Ext.getCmp('money').setValue(newValue);
					    	        		  }
					    	        	  }
					    	          },
					    	          {
					    	        	  xtype:'numberfield',
					    	        	  name:'money',
					    	        	  id:'money',
					    	        	  label:'희망연봉값',
					    	        	  value:0,
					    	        	  clearIcon:false,
					    	        	  readOnly:true
					    	          },
					    	          {
					    	        	  xtype:'textareafield',
					    	        	  name:'content',
					    	        	  label:'자기소개',
					    	        	  maxRows:5
					    	          },
					    	          {
					    	        	  layout:{type:'hbox', pack:'center'},
					    	        	  items:[
						    	        	         {
						    	        	        		xtype:'button',
							    	        	         	width:100,
							    	        	         	text:'등록',
							    	        	         	//이벤트 처리
							    	        	         	handler:function(){
							    	        	         		alert('전송되었습니다.');
							    	        	         		var loadValues = formPanel.getValues();
							    	        	         		console.log('name (name): ' + loadValues.name);				//name속성 name통해(key값 통해)
							    	        	         		console.log('name (id): ' + Ext.getCmp('name').getValue());	//name속성 id통해
							    	        	         	}
						    	        	         },
						    	        	         {
						    	        	        	 xtype:'spacer',
						    	        	        	 width:'10%'
						    	        	         },
						    	        	         {
						    	        	        	 xtype:'button',
						    	        	        	 width:100,
						    	        	        	 text:'취소',
						    	        	        	 //이벤트 처리
						    	        	        	 handler:function(){
						    	        	        		 alert('취소합니다.');
						    	        	        		 formPanel.reset();
						    	        	        	 }
						    	        	         }
					    	        	         ]
					    	          }
				    	          ]
				       }
			       ]
		});
		
		var rootPanel=Ext.create('Ext.Panel', {
			fullscreen:true,
			layout:'fit',
			items:[formPanel]
		});
	}
});