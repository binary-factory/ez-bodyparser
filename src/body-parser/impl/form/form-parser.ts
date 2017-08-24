import { BodyParser } from '../../body-parser';
import { FormParserOptions } from './form-parser-options';
import * as http from 'http';

export class FormParser extends BodyParser<FormParserOptions, any> {
    parse(request: http.IncomingMessage) {
        throw new Error("Method not implemented.");
    }
}