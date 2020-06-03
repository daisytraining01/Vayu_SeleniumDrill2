@FullSuit
Feature: Login to fish bank and withdraw the amount

  @seltest
  Scenario: To Withdraw the amount in Primary Accounnt
    Given user fetches the details from DB_Nitin
    Given user navigates to webpage_Nitin
    And user enters the login Credential_Nitin
    When user clicks login button_Nitin
    Then user validates the information_Nitin
    When user navigates to withdraw page_Nitin
    Then user validates the Withdrawpage should display_Nitin
    And user selects primary acccount in accounts dropdown_Nitin
    Then user enters amount that would like to withdraw_Nitin
    Then user clicks on withdraw button_Nitin
    And user logs out from the applicaton_Nitin
    
    
    @seltest
  	Scenario: To Withdraw the amount in Saving Accounnt
    Given user fetches the details from secondDB_Nitin
    Given user navigates to webpage_Nitin
    And user enters the login Credential_Nitin
    When user clicks login button_Nitin
    Then user validates the information_Nitin
    When user navigates to withdraw page_Nitin
    Then user validates the Withdrawpage should display_Nitin
    And user selects savings acccount in accounts dropdown_Nitin
    Then user enters savings amount that would like to withdraw_Nitin
    Then user clicks on withdraw button_Nitin
    And user logs out from the applicaton_Nitin