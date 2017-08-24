import { BodyParserProvider } from './body-parser/body-parser-provider';
import { JSONParserOptions } from './body-parser/impl/json/json-parser-options';
import { MultipartOptions } from './body-parser/impl/multipart/multipart-options';
import { TextParserOptions } from './body-parser/impl/text/text-parser-options';
import { FormParserOptions } from './body-parser/impl/form/form-parser-options';
import { ContentDecoderProvider } from './content-decoder/content-decoder-provider';

export interface BodyParserOptions {
    form?: FormParserOptions;
    json?: JSONParserOptions;
    multipart?: MultipartOptions;
    text?: TextParserOptions;
    bodyParserFactory?: BodyParserProvider;
    contentDecoderFactory?: ContentDecoderProvider;
}