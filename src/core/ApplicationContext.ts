import 'reflect-metadata';
import {Provider} from 'injection-js/provider';
import {ReflectiveInjector} from 'injection-js';

export class ApplicationContext {

    private static applicationContext: ApplicationContext = null;

    private providers: Provider[] = [];
    private injector: ReflectiveInjector;

    register(type: any): ApplicationContext {
        this.providers.push(type);
        return this;
    }

    static bootstrap(...config) {
        const ac = ApplicationContext.instance();
        ac.injector = ReflectiveInjector.resolveAndCreate(ac.providers);
    }

    get(token: any) {
        return this.injector.get(token);
    }

    static instance(): ApplicationContext {
        if (!ApplicationContext.applicationContext) {
            ApplicationContext.applicationContext = new ApplicationContext();
        }

        return ApplicationContext.applicationContext;
    }
}