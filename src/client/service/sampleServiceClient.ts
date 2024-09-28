import { RestClient } from '../REST/sampleRESTClient';
import { ServiceException } from '../../utils/Exceptions/CustomErrors'
import logger from '../../utils/logger';

export class ServiceClient {
    private restClient: RestClient;

    constructor() {
        this.restClient = new RestClient();
    }

    public async callGoogleScholar(): Promise<any> {
        try {

            logger.info("Service client Log: getting employee details");
            const number = '1';
            const response = await this.restClient.interactWithGoogleScholar(number);

            logger.info("Service client Log: successfully got employee details")
            return response;
        } catch (error) {

            logger.error("Service Client Log: error getting employee details")
            throw new ServiceException('External service call failed', 502);
        }
    }

    public async callResearchGate(): Promise<any> {
        try {

            logger.info("Service client Log: getting titles and links from ResearchGate");
            const number = '1';
            const response = await this.restClient.interactWithResearchGate(number);

            logger.info("Service client Log: successfully got titles and links from ResearchGate")
            return response;

        } catch (error) {
            logger.error("Service Client Log: error getting titles and links from ResearchGate")
            throw new ServiceException('External service call failed', 502);
        }
    }
}
