import { BodyParser } from './body-parser';
import { BodyParserOptions } from '../body-parser-options';

export interface BodyParserProvider {
    create(contentType: string, options: BodyParserOptions): BodyParser<any, any>

}