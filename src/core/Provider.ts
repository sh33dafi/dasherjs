import {ApplicationContext} from './ApplicationContext';

export function Provider() {
    return (target, key, descriptor) => {
        registerProvider(descriptor.value);
    }
}

export function Providers() {
    return (target, key, descriptor) => {
        const providers = descriptor.value();
        if (providers instanceof Array) {
            providers.forEach(registerProvider);
        } else {
            registerProvider(providers)
        }
    }
}

const registerProvider = (provider) => ApplicationContext.instance().register(provider);