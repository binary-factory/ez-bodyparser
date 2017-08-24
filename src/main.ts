import { EzPluginManager, EzRouterPlugin, EzServer } from '@binary-factory/ez-http';
import './extend';

const server: EzServer = new EzServer();
EzPluginManager.registerPlugin(new EzRouterPlugin())
    .then(() => {
        console.log('plugin registrated');
    })
    .catch((err) => {
        console.log('could not register plugin', err);
    });

server.listen(8080);
