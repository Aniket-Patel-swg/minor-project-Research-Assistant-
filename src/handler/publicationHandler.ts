import { APIGatewayProxyEvent } from 'aws-lambda';
import { Service } from '../service/sampleService';
import logger from '../utils/logger';
import { buildResponse } from '../utils/Response/apiResponseBuilder';

export class Handler {
    private service: Service;

    constructor() {
        this.service = new Service();
    }

    public async handleGoogleScholar(event: APIGatewayProxyEvent): Promise<any> {

        logger.info('Handler log: getting exployee details API')

        const requestData = JSON.parse(event.body!);

        const result = await this.service.googleScholarBusinessLogic(requestData);

        logger.info('Handler Log: Success getting employee details')

        const returnResponse = await buildResponse(200, result);
        return returnResponse;
    }

    public async handleResearchGate(event: APIGatewayProxyEvent): Promise<any> {

        logger.info('Handler log: getting exployee details API')

        const requestData = JSON.parse(event.body!);

        const result = await this.service.researchGateBusinessLogic(requestData);

        logger.info('Handler Log: Success getting employee details')

        const returnResponse = await buildResponse(200, result);
        return returnResponse

    }
}
