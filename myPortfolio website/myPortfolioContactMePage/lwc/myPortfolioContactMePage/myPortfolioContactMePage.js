import { LightningElement, api } from 'lwc';
import contactMeImage from '@salesforce/resourceUrl/myPortfolioContactMe';
export default class MyPortfolioContactMePage extends LightningElement {
    @api themeClass;
    codeImageUrl = contactMeImage;
}