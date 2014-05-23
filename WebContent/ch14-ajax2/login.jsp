<%@ page language="java" contentType="text/plain; charset=UTF-8"
    pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%
	String mid=request.getParameter("mid");
	String mpassword=request.getParameter("mpassword");
	
	String message=null;
	
	if(mid!=null && mpassword!=null){
		if(mid.equals("user")){
			if(mpassword.equals("12345678")){
				message="로그인 성공";
			}else{
				message="비밀번호가 틀립니다";
			}
		}else{
			message="아이디가 존재하지 않습니다.";
		}
		//message="아이디 또는 비밀번호가 일치하지 않습니다.";
	}else{
		message="아이디와 비밀번호가 필요합니다.";
	}
	
	if(message.equals("로그인 성공")){
%>
		{
			"success":true,
			"loginResult":"success"
		}
<%	
	}else{
%>
		{
			"success":true,
			"loginResult":"fail",
			"message":"<%=message%>"
		}
<%
	}
%>
