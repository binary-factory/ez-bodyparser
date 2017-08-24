import { ContentDecoderProvider } from './content-decoder-provider';
import { ContentDecoder } from './content-decoder';

export class ContentDecoderFactory implements ContentDecoderProvider {
    create(contentType?: string): ContentDecoder {
        throw new Error("Method not implemented.");
    }
}