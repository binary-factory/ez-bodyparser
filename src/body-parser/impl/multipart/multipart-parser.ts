import { BodyParser } from '../../body-parser';
import { MultipartOptions } from './multipart-options';
import * as http from 'http';

export class MultipartParser extends BodyParser<MultipartOptions, any> {

    parse(request: http.IncomingMessage) {
        throw new Error("Method not implemented.");
    }

}