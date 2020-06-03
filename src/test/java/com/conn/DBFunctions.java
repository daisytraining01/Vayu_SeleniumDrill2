package com.conn;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.LinkedList;

import org.testng.annotations.Test;

public class DBFunctions {

	
	public static Connection dbc;

	 public static ArrayList<String> names = new ArrayList<String>();
	
	public static ArrayList<String> getMydetails() {
		dbc = ConnectionUtils.getConnection();
		String sql;
		try {
			Statement stm = dbc.createStatement();
			sql = "SELECT * FROM Nitin_Widthdraw where flag='Y';";
			System.out.println(sql);
			 ResultSet results = stm.executeQuery(sql);
			  while (results.next()) {
		           names.add(results.getString("UserName"));
		           names.add(results.getString("Password"));
		           names.add(results.getString("Amount"));
		           names.add(results.getString("Flag"));
		          

		 

		            System.out.print(results.getString("UserName"));
		            System.out.print("    ");
		            System.out.print(results.getString("Password"));
		            System.out.print("  ");
		            System.out.print(results.getString("Amount"));
		            System.out.println("  ");
		            System.out.print(results.getString("Flag"));
		            System.out.println("  ");
		 

		        }
			ConnectionUtils.closeQuietly(dbc);
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("Records created successfully");
		return names;
	}
	
	public static void updatetoDB(String primarybalancebefore, String savingbalacebefore) {
		dbc = ConnectionUtils.getConnection();
		String sql;
		try {
			Statement stm = dbc.createStatement();
			sql = "UPDATE `Nitin_Widthdraw` SET `PrimaryBalanceBeforeWithdraw`='"+primarybalancebefore+"',`SavingbalanceBeforeWithDraw`='"+savingbalacebefore+"' WHERE Flag='Y'";
			System.out.println(sql);
			  stm.executeUpdate(sql);
			  
			ConnectionUtils.closeQuietly(dbc);
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("Records updated successfully");
		
	}
	
	public static void updatetoDB_after(String primarybalanceafter, String savingbalaceafter) {
		dbc = ConnectionUtils.getConnection();
		String sql;
		try {
			Statement stm = dbc.createStatement();
			sql = "UPDATE `Nitin_Widthdraw` SET `PrimaryBalanceAfterWithdraw`='"+primarybalanceafter+"',`SavingbalanceAfterWithDraw`='"+savingbalaceafter+"' WHERE Flag='Y'";
			System.out.println(sql);
			  stm.executeUpdate(sql);
			  
			ConnectionUtils.closeQuietly(dbc);
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("Records updated successfully");
		
	}
	
	
	public static void accountName_saving(String Accountname) {
		dbc = ConnectionUtils.getConnection();
		String sql;
		try {
			Statement stm = dbc.createStatement();
			sql = "UPDATE `Nitin_Widthdraw` SET `WithdrawAccount`='"+Accountname+"' WHERE Flag='Y'";
			System.out.println(sql);
			  stm.executeUpdate(sql);
			  
			ConnectionUtils.closeQuietly(dbc);
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("Records updated successfully");
		
	}
	public static void changeflagstatus() {
		dbc = ConnectionUtils.getConnection();
		String sql;
		try {
			Statement stm = dbc.createStatement();
			sql = "UPDATE `Nitin_Widthdraw` SET `Flag`='N' WHERE SLNo='1'";
			System.out.println(sql);
			  stm.executeUpdate(sql);
			  
			  sql = "UPDATE `Nitin_Widthdraw` SET `Flag`='Y' WHERE SLNo='2'";
				System.out.println(sql);
				  stm.executeUpdate(sql);
			  
			ConnectionUtils.closeQuietly(dbc);
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("Records updated successfully");
		
	}
	
	
	
}
