package com.conn;

import java.sql.Connection;
import java.sql.DriverManager;
public class MySQLConnUtils {

	public static Connection getMySQLConnection() {
		// Note: Change the connection parameters accordingly.
		String hostName = "elastic.rapidtestpro.com";
		String dbName = "Vayu1";
		String userName = "belitypi";
		String password = "47GWrkhPknA3";
		String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
	  //  static final String DB_URL = "jdbc:mysql://elastic.rapidtestpro.com:2777/Vayu1";
		return getMySQLConnection(hostName, dbName, userName, password,JDBC_DRIVER);
	}

	public static Connection getMySQLConnection(String hostName, String dbName, String userName, String password,String dbdriver) {
		Connection conn = null;
		try {
			//String unicode= "?useSSL=false&useUnicode=yes&characterEncoding=UTF-8";
			Class.forName(dbdriver);
			String connectionURL = "jdbc:mysql://" + hostName + ":2777/"+ dbName;
			conn = DriverManager.getConnection(connectionURL, userName, password);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return conn;
	}
}
