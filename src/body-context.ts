import { EzContext } from '@binary-factory/ez-http';

export class BodyContext {

    constructor(private _context: EzContext) {

    }

    hasBody(): boolean {
        const headers = this._context.request.headers;
        return 'content-length' in headers || 'transfer-encoding' in headers;
    }

    isCompressed(): boolean {
        const contentEncoding = this._context.request.headers['content-type'];
        return contentEncoding && contentEncoding !== 'identity';
    }
}