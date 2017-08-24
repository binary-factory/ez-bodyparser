export interface ContentDecoder {
    decode(body: Buffer) : Buffer | Promise<Buffer>;
}