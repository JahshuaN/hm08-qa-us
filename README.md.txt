Project Name:
Urban Routes Automation Testing

Description:
This project automates the testing process for the Urban Routes application. 
It ensures that the key functionalities including ordering a taxi, adding payment methods, and customizing options work as expected. 
The tests are written with WebdriverIO.

Technologies and Techniques
- WebdriverIO: Used for browser automation.
- Node.js: Runtime for JavaScript.
- NPM: For dependency management.
- Mocha: Testing framework.
- Chai: Assertion library.
- Git: Version control.
- GitHub: Repository hosting

Instructions to Run the Tests:

1. Clone the Repository:
   	```bash
   	git clone git@github.com:yourusername/hm08-qa-us.git(insert your github info)

2. Navigate to the project folder:
	cd hm08-qa-us

3. Install dependencies: Run the following command to intall the necessary project dependencies:
	npm install

4. Update configuration: Replace the baseUrl in the wdio.conf.js file with the Urban Routes server URL.

5.Run the tests: Use the following command to execute all the test cases
	npx wdio run wdio.conf.js

6. View test results: Test results will be displayed in the terminal