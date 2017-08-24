import { BodyParserProvider } from './body-parser-provider';
import { BodyParser } from './body-parser';
import { BodyParserOptions } from '../body-parser-options';
import { JSONParser } from './impl/json/json-parser';
import { MultipartParser } from './impl/multipart/multipart-parser';
import { TextParser } from './impl/text/text-parser';
import { FormParser } from './impl/form/form-parser';

export class BodyParserFactory implements BodyParserProvider {

    create(contentType: string, options: BodyParserOptions): BodyParser<any, any> {
        if (contentType === 'application/x-www-form-urlencoded') {
            return new FormParser(options.form);

        } else if (contentType === 'application/json') {
            return new JSONParser(options.json);

        } else if (contentType === 'multipart/form') {
            return new MultipartParser(options.multipart);

        } else if (contentType === 'text/plain') {
            return new TextParser(options.text);

        } else {
            return null;
        }
    }
}