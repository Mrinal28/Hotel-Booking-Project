package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SendEmailApplication implements CommandLineRunner{
	@Autowired
	private MailService mailService;
	
	public static void main(String[] args) {
		SpringApplication.run(SendEmailApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		int otp = (int) (Math.random() * 1000000);
		try {
		mailService.send("mrinalmohan28@gmail.com","Hello from Hotel Site","Your otp is "+otp);      //link to change auth https://myaccount.google.com/lesssecureapps
		System.out.println("Done");
	}catch(Exception e) {
		System.out.println(e.getMessage());
	}
}
}