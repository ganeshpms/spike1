import {provide, Inject, OpaqueToken} from 'angular2/core';

export const localStorageBackend = new OpaqueToken('localStorageBackend');

export interface StorageBackend {
    getItem(key:string):any;
    setItem(key:string, value:any):void;
    removeItem(key:string):void;
}

export class Storage {
    storageBackend:StorageBackend;

    constructor(@Inject(localStorageBackend) storageBackend:StorageBackend) {
        this.storageBackend = storageBackend;
    }

    getItem(key) {
        return this.storageBackend.getItem(key);
    }

    setItem(key, value) {
        return this.storageBackend.setItem(key, value);
    }

    removeItem(key) {
        return this.storageBackend.removeItem(key);
    }
}

export const STORAGE_PROVIDERS = [
    Storage,
    provide(localStorageBackend, {
        useFactory() {
            return window.localStorage;
        }
    })
];