import { expect } from 'chai'
import 'reflect-metadata';
import {ReflectiveInjector, provide} from 'angular2/core';
import {Login} from './login';
import {STORAGE_PROVIDERS, Storage, StorageBackend, localStorageBackend} from './services/local_storage';

class MockLocalStorage implements StorageBackend {
    getItem(key:string):any {
        return undefined;
    }

    setItem(key:string, value:any):void {
        return;
    }

    removeItem(key:string):void {
        return;
    }
}

describe('Login The Hard Way', () => {
    let injector:ReflectiveInjector;
    let mockStorage:Storage;

    beforeEach(() => {
        injector = ReflectiveInjector.resolveAndCreate([STORAGE_PROVIDERS, provide(localStorageBackend, {useClass: MockLocalStorage})]);
        mockStorage = injector.get(localStorageBackend);
    });

    it('Injects a mock StorageBackend', () => {
       expect(mockStorage).to.be.ok;
        
    });

    it('uses LocalStorage', () => {
        var login = new Login(mockStorage);
        expect(login).to.not.be.null;
    });
    
      it('should pass', () => {
        expect(1).to.be.null;
    });
});