import * as http from 'http';

export abstract class BodyParser<T, J> {

    constructor(private _options: T) {

    }

    abstract parse(request: http.IncomingMessage): J | Promise<J>;

    protected receiveBody(request: http.IncomingMessage, sizeLimit: number): Promise<Buffer> {
        return new Promise((resolve, reject) => {
            let body = Buffer.alloc(0);
            request.on('data', (chunk: Buffer) => {
                body = Buffer.concat([body, chunk]);
            });

            request.on('end', () => {
                resolve(body);
            });
        });
    }

    get options(): T {
        return this._options;
    }

    set options(value: T) {
        this._options = value;
    }
}