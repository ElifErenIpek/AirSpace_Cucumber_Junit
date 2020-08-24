# AirSpace 


BDD Cucumber – Selenium Web Driver – Java Test Automation Framework

This is a reusable automation framework that blends together Selenium WebDriver, JUnit and Cucumber (incorporating Gherkin and the BDD 'Given, When Then' testing construct) with Page Object Model Design. 

This framework is build by using Maven as a build automation tool. 
Maven is used to build the framework, manage the dependencies and plugins, run the tests as a maven life cycle.

These are dependencies which are used in this framework:

<dependencies>
    <!-- https://mvnrepository.com/artifact/org.seleniumhq.selenium/selenium-java -->
    <dependency>
        <groupId>org.seleniumhq.selenium</groupId>
        <artifactId>selenium-java</artifactId>
        <version>3.141.59</version>
    </dependency>

    <!-- https://mvnrepository.com/artifact/io.github.bonigarcia/webdrivermanager -->
    <dependency>
        <groupId>io.github.bonigarcia</groupId>
        <artifactId>webdrivermanager</artifactId>
        <version>3.8.0</version>
    </dependency>

    <!-- https://mvnrepository.com/artifact/io.cucumber/cucumber-java -->
    <dependency>
        <groupId>io.cucumber</groupId>
        <artifactId>cucumber-java</artifactId>
        <version>4.2.0</version>
    </dependency>

    <!-- https://mvnrepository.com/artifact/io.cucumber/cucumber-junit -->
    <dependency>
        <groupId>io.cucumber</groupId>
        <artifactId>cucumber-junit</artifactId>
        <version>4.2.0</version>
        <scope>test</scope>
    </dependency>


</dependencies>

It is written using Java language.
It is a Cucumber BDD framework. Cucumber is a tool used to make automated testing understandable to the non technical team members. Cucumber serves as a bridge in connecting the automation engineers and the non technical team members. 

In this framework, junit is used to kick off cucumber tests and do assertions.
Selenium WebDriver is used for automating the browsers.. Selenium allows the run tests in different browsers.
This framework generates step by step HTML reports with screenshots using the maven-cucumber-report plugin.
This framework is based on page object model design pattern. It prevent framework from code redundancy.
In this framework. properties file is used to store the important information about the framework such as url, browser type, login info etc.




FRAMEWORK ARCHITECTURE

    - src
        -main
        -test
            -java
                -pages  : create classes for each page of the application, and store related webElements.
                -runners: store all runner classes inside of this package. This class is triggered point of the framework. You can use tags keyword inside of our CucumberOptions to create different group of tests in our testing suite such as Smoke, Regression, NegativeLogin, PositiveLogin etc. 
                -steps_definitions : implementing the steps which are written in the feature files.                             
                               -hooks: It is mainly used for proper reporting in Cucumber. 'Hooks' is the keyword used to describe the action of setting up and tearing down.
                -utilities : create driver & configuration classes, and many other reusable utilities
            -resources
                -features : where scenarios are written in Gherkin language.
    - target  : all of the results of the framework will be stored in target. 
        ex: reports will be generated and stored in this directory
    - pom.xml : manage our dependencies from pom.xml
    -configuration.properties : important test data that will be changing the flow of the framework is stored in key and value format in this file.

 

Cucumber Scenario execution flow
1) Runner hits the tag
2) Runner determines the feature file needed for execution
3) Runner finds the Scenario matches the given tag
4) Runner look for the step definitions for the Scenario being run. It finds the step implementation from the Step Definition package
5) Runner executes step by step



















