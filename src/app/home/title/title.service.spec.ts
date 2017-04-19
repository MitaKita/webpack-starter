import {
  inject,
  TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Title } from './title.service';

describe('Title', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      Title
    ]}));

  it('should have http', inject([ Title ], (title: Title) => {
    expect<any>(!!title.http).toEqual(true);
  }));

  it('should get data from the server', inject([ Title ], (title: Title) => {
    spyOn(console, 'log');
    expect<any>(console.log).not.toHaveBeenCalled();

    title.getData();
    expect<any>(console.log).toHaveBeenCalled();
    expect<any>(title.getData()).toEqual({ value: 'AngularClass' });
  }));

});
