
import { EzContext } from '@binary-factory/ez-http/dist/middleware/context';

declare module '@binary-factory/ez-http/dist/middleware/context' {
    interface EzContext {
        rawBody: Buffer;
        body: any;
    }
}