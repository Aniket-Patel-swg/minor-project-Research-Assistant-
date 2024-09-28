import { ServiceClient } from '../client/service/sampleServiceClient';
import { processGoogleScholarResponse } from '../converter/googleScholar/response/processGoogleScholarData';
import { processsResearchGateData } from '../converter/researchGate/response/processResearchGateData';
import { ServiceException, ConverterException } from '../utils/Exceptions/CustomErrors';
import logger from '../utils/logger';

export class Service {
    private serviceClient: ServiceClient;

    constructor() {
        this.serviceClient = new ServiceClient();
    }

    public async googleScholarBusinessLogic(data: any): Promise<any> {
        try {

            logger.info('Service Log: get publications from Google Scholar API')


            // Call the Service Client
            const response = await this.serviceClient.callGoogleScholar();

            logger.info("Service Log: succesfully got publications from Google Scholar API")

            // Perform post-processing if necessary
            const convertedData = processGoogleScholarResponse(response);

            logger.info("Service Log: successfully  converted publication response")

            return convertedData;
        } catch (error) {

            logger.error("Service Log: error getting publications from Google Scholar API")

            if (error instanceof ConverterException) {
                throw error;
            }
            throw new ServiceException('Error in business logic execution', 500);
        }
    }

    public async researchGateBusinessLogic(data: any): Promise<any>{
        try {

            logger.info('Service Log: get publications from Research Gate API')

            // Call the Service Client
            const response = await this.serviceClient.callResearchGate();

            logger.info("Service Log: succesfully got publications from Research Gate API")

            // transform data

            const transformedData = processsResearchGateData(response);

            return transformedData;
            
        } catch (error) {

            if (error instanceof ConverterException) {
                throw error;
            }
            
            logger.error('error getting publications from Research Gate API')
            throw new ServiceException('Internal Server Error', 500)
        }
    }

}
