import { ConverterException } from "../../../utils/Exceptions/CustomErrors";
import logger from "../../../utils/logger";
import { JSDOM } from 'jsdom';

export const processGoogleScholarResponse = (response: any) => {
    try {
        // Process response logic

        const titlesAndLinks: any[] = [];

        const dom = new JSDOM(response);
        const document = dom.window.document;

        // Select the <h3> tag with class "gs_rt"
        const h3Element = document.querySelectorAll('.gs_rt');

        h3Element.forEach(h3Element => {
            // Find the <a> tag inside the <h3> element
            const anchorElement = h3Element.querySelector('a');
            
            if (anchorElement) {
                // Extract the link (href attribute)
                const link = anchorElement.href;

                // Extract the heading (text content) from the <a> tag
                const heading = anchorElement.textContent!.trim();

                // Add the extracted link and heading to the array
                titlesAndLinks.push({ heading, link });
            }
        });

        logger.info("Converter Log: Converting employee response data");
        return { response: titlesAndLinks };
    } catch (error) {
        logger.error("Converter Log: Failed Converting employee response data ")
        throw new ConverterException('Failed to process response');
    }
}