import 'reflect-metadata';
import {Provider} from 'injection-js/provider';
import {ReflectiveInjector} from 'injection-js';

export class ApplicationContext {


    private injector: ReflectiveInjector;

    constructor(providers: Array<Provider>) {
        this.injector = ReflectiveInjector.resolveAndCreate(providers);
    }
}