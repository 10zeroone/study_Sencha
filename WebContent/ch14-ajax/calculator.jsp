<%@ page language="java" contentType="text/plain; charset=UTF-8"
    pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%
//테스트 용도로 시간을 지연하여 결과 반환
Thread.sleep(5000);

int x = Integer.parseInt(request.getParameter("x"));
int y = Integer.parseInt(request.getParameter("y"));

int result = x*y;
%>
<%=result%>