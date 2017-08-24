import { ContentDecoder } from './content-decoder';

export interface ContentDecoderProvider {
    create(contentType?: string): ContentDecoder;
}