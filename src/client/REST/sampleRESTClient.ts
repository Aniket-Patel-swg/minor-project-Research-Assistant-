import axios from 'axios';
import { ClientException } from '../../utils/Exceptions/CustomErrors';
import logger from '../../utils/logger';

export class RestClient {
    public async interactWithGoogleScholar(paginationNumber: string): Promise<any> {
        try {

            logger.info("REST Client log: Get employee details API")

            const response = await axios.get(`https://scholar.google.com/scholar?start=${paginationNumber}0&q=image+processing&hl=en&as_sdt=0,5`);

            logger.info("REST Client Log: success getting employee details")
            return response.data;
        } catch (error) {
            logger.error("REST Client Log: error getting employee details")
            throw new ClientException('HTTP request failed', 502);
        }
    }

    public async interactWithResearchGate(paginationNumber: string):Promise<any>{
        try {
            
            logger.info("REST Client log: interacting with researchgate")

            const response = await axios.get(`https://www.researchgate.net/search/publication?q=image%20processing&start=${paginationNumber}`);

            logger.info("REST Client Log: success getting titles and links from ResearchGate")
            return response.data;

        } catch (error) {
            logger.error("REST Client Log: error getting titles and links from ResearchGate")
            throw new ClientException('HTTP request failed', 502);
        }
    }
}
