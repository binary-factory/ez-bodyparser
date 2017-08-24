import { BodyParser } from '../../body-parser';
import * as http from 'http';
import { JSONParserOptions } from './json-parser-options';

export class JSONParser extends BodyParser<JSONParserOptions, any> {

    parse(request: http.IncomingMessage): Promise<any> | any {
        return JSON.parse('');
    }

}