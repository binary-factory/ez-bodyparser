import { BodyParser } from '../../body-parser';
import { TextParserOptions } from './text-parser-options';
import * as http from 'http';

export class TextParser extends BodyParser<TextParserOptions, string> {
    parse(request: http.IncomingMessage): string | Promise<string> {
        throw new Error("Method not implemented.");
    }

}