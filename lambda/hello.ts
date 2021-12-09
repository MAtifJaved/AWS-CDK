import {APIGatewayProxyEvent,APIGatewayProxyResult,Context} from 'aws-lambda';
export async function handler(event:APIGatewayProxyEvent,context:Context): Promise<APIGatewayProxyResult>{
    console.log("Request", JSON.stringify(event,undefined,2));

    return {
        statusCode:200,
        headers:{"Content-Type":"text/plain"},
        body:`Hello, CDK! You have hit a ${event.path}\n`
    };
}