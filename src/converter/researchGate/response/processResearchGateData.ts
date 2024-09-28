import { ConverterException } from "../../../utils/Exceptions/CustomErrors"
import logger from "../../../utils/logger"
import { JSDOM } from "jsdom"

export const processsResearchGateData = (response: any) => {
    try {

        const titlesAndLinks: any[] = [];

        const dom = new JSDOM(response);
        const document = dom.window.document;

        const divElements = document.querySelectorAll('.nova-legacy-v-publication-item__title');

        divElements.forEach(divElement => {
            const anchorElement = divElement.querySelector('a');
            if (anchorElement) {
                // Extract the href attribute (link)
                const link = anchorElement.href;
        
                // Extract the text content (title)
                const title = anchorElement.textContent!.trim();
        
                // Push the extracted data into the array
                titlesAndLinks.push({ title, link });
            }
        });

        return { response: titlesAndLinks };

    } catch (error) {
        logger.error('error converting reserach gate data')
        throw new ConverterException('Error converting data', 500)
    }
}