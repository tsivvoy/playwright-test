# POC to verify if playwright can use multiple programming languages to write API test, WEB test, connect to DB, MQMessaging and SW3

# Reference:
1. https://github.com/mockoon/mockoon/tree/main/packages/cli#installation
2. https://playwright.dev/docs/intro
3. https://pypi.org/project/boto3/ - to connect to S3

# api-test-playwright
1. yarn install

# .env
1. create a file name e.g env.test
2. contain the following:
    API_URL=https://api.thedogapi.com/v1
    API_KEY=your_personal_key

# Run Mockoon server
1. yarn start:mock
2. yarn mock:test - will run mock test against test environment

# Run Tests
1. yarn int:test - will run integration test against test environment
