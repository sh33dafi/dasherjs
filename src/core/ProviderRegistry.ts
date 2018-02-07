import {Provider} from 'injection-js/provider';
import {ApplicationContext} from './ApplicationContext';

export class ProviderRegistry {
    private providers: Provider[] = [];
    private static registryInstance: ProviderRegistry;

    public register(type: any) {
        this.providers.push(type);
    }

    public getProviders() {
        return this.providers;
    }

    static instance(): ProviderRegistry {
        if (!ProviderRegistry.registryInstance) {
            ProviderRegistry.registryInstance = new ProviderRegistry();
        }

        return ProviderRegistry.registryInstance;
    }
}