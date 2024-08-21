# Create a Proof of Concept (POC) to evaluate whether Playwright can support the following tasks:
1. API Testing: Write API tests using TypeScript.
2. Web Testing: Write web tests using TypeScript.
3. Database Connectivity: Connect to a database using Python.
4. Message Queue Handling: Implement messaging with MQ using Python.
5. S3 Integration: Interact with AWS S3 using Python.
6. Mock Service Creation: Create a mock service using Mockoon.

# References:
1. https://github.com/mockoon/mockoon/tree/main/packages/cli#installation
2. https://playwright.dev/docs/intro
3. https://pypi.org/project/boto3/ - to connect to S3

# api-test-playwright
1. yarn install

# .env
1. create a file name e.g env.test, env.local, env.staging, env.prod
2. contain the following:
    API_URL=https://api.thedogapi.com/v1
    API_KEY=your_personal_key

# Run Mockoon server
1. yarn start:mock
2. yarn mock:test

# Run API Tests
1. yarn api:test 

# Run Web Tests
1. yarn run web:test
