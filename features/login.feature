@login
Feature: Login
  As a SauceDemo customer
  I want to log in with my credentials
  So that I can access the product catalog

  Background:
    Given I am on the login page

  @smoke
  Scenario: Successful login with valid credentials
    When I log in as "standard_user"
    Then I should see the products page

  @negative
  Scenario Outline: Login fails with <case>
    When I log in with username "<username>" and password "<password>"
    Then I should see the login error "<message>"

    Examples:
      | case              | username      | password     | message                                                                   |
      | a wrong password  | standard_user | wrong_pass   | Epic sadface: Username and password do not match any user in this service |
      | an unknown user   | unknown_user  | any_password | Epic sadface: Username and password do not match any user in this service |
      | an empty username |               | any_password | Epic sadface: Username is required                                        |
      | an empty password | standard_user |              | Epic sadface: Password is required                                        |

  @negative
  Scenario: Locked out user cannot log in
    When I log in as "locked_out_user"
    Then I should see the login error "Epic sadface: Sorry, this user has been locked out."

  @smoke
  Scenario: Logout returns to the login page
    Given I am logged in as "standard_user"
    When I log out
    Then I should see the login page
