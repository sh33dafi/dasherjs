import {ApplicationContext} from './ApplicationContext';
import {ProviderRegistry} from './ProviderRegistry';

export class Dasher {

    private static applicationContext: ApplicationContext;

    static bootstrap(...config) {
        Dasher.applicationContext = new ApplicationContext(ProviderRegistry.instance().getProviders());
    }

}