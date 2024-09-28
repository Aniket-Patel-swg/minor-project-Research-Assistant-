import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { buildResponse } from '../utils/Response/apiResponseBuilder';
import { Handler } from './publicationHandler';

export const routeHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // call handlers as per routes

    const handler = new Handler();
    const { httpMethod, path } = event;

    if (httpMethod === 'GET' || path === '/papers/googleScholar') {
        return await handler.handleGoogleScholar(event);
    }

    if (httpMethod === 'GET' || path === '/papers/reserachGate') {
        return await handler.handleResearchGate(event);
    }

    return buildResponse(404, { message: 'Route not found' });
};
