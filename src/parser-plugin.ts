import { EzContext, EzPlugin } from '@binary-factory/ez-http';
import { BodyContext } from './body-context';

export class EzBodyParserPlugin extends EzPlugin {

    constructor() {
        super();
    }

    activate(): void | Promise<void> {
    }

    prepare(context: EzContext): void | Promise<void> {
        context.body = new BodyContext(context);
    }

    finish(context: EzContext): void | Promise<void> {
    }
}