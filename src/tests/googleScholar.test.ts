import { APIGatewayProxyEvent } from 'aws-lambda';
import fs from 'fs';
import { Handler } from '../handler/publicationHandler';

test('Checking if API is working or not', async () => {

    const event: APIGatewayProxyEvent = {
        body: JSON.stringify({ key: "value" }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer token",
        },
        multiValueHeaders: {
            "Accept": ["text/html", "application/json"],
        },
        httpMethod: "GET",
        isBase64Encoded: false,
        path: "/papers/resource",
        pathParameters: {
            id: "12345",
        },
        queryStringParameters: {
            param1: "value1",
        },
        multiValueQueryStringParameters: {
            param1: ["value1", "value2"],
        },
        stageVariables: {
            stageName: "dev",
        },
        requestContext: {
            accountId: "123456789012",
            apiId: "api-id",
            authorizer: {},
            protocol: "HTTP/1.1",
            httpMethod: "POST",
            identity: {
                accessKey: null,
                accountId: null,
                apiKey: null,
                apiKeyId: null,
                caller: null,
                cognitoAuthenticationProvider: null,
                cognitoAuthenticationType: null,
                cognitoIdentityId: null,
                cognitoIdentityPoolId: null,
                principalOrgId: null,
                clientCert: null,
                sourceIp: "192.168.0.1",
                user: null,
                userAgent: "PostmanRuntime/7.26.8",
                userArn: null,
            },
            path: "/papers/googleScholar",
            stage: "dev",
            requestId: "c4b6d6d1-0f9d-4e2a-bef2-abc123456789",
            requestTimeEpoch: 1610489450000,
            resourceId: "resource-id",
            resourcePath: "/myapi/resource",
            domainName: "api.example.com",
            domainPrefix: "api",
            requestTime: "12/Jan/2021:19:30:50 +0000",
        },
        resource: "/myapi/resource",
    };

    const handler = new Handler();
    const startTime = Date.now();
    const response = await handler.handleGoogleScholar(event);

    const endTime = Date.now();

    // Calculate the duration in milliseconds
    const duration = endTime - startTime;
    console.log("Duration: ", duration);
    fs.writeFileSync("response {google Scholar}.json", response.body);
    console.log("Response: ", response.body);

}, 30000)
