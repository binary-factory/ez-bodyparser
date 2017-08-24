import { EzContext, EzMiddleware, MiddlewareAction, HttpError, HttpStatusCode } from '@binary-factory/ez-http';
import { BodyParserOptions } from './body-parser-options';

export class EzBodyParser extends EzMiddleware {

    constructor(private _options: BodyParserOptions) {
        super();
    }

    async execute(context: EzContext): Promise<MiddlewareAction> {

        if (!context.body.hasBody()) {
            return MiddlewareAction.Continue;
        }

        const contentType = context.request.headers['content-type'];
        const bodyParser = this._options.bodyParserFactory.create(contentType, this._options);
        if (!bodyParser) {
            throw new HttpError(HttpStatusCode.UnsupportedMediaType, `Content-Type '${contentType}' is not supported.`);
        }

        if (context.body.isCompressed()) {
            const contentEncoding =  context.request.headers['content-encoding'];
            const contentDecoder = this._options.contentDecoderFactory.create(contentEncoding);
            if (!contentDecoder) {
                throw new HttpError(HttpStatusCode.UnsupportedMediaType, `Content-Encoding '${contentEncoding}' is not supported.`);
            }
        }


    }
}