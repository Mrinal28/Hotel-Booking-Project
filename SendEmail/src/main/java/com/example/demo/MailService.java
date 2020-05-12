package com.example.demo;

public interface MailService {

		public void send(String toAddress,String subject,String content)throws Exception;
}
