import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AppComponent } from './app.component';
import { AppState } from './app.service';

describe(`App`, () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [AppState]
    })
    .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp    = fixture.componentInstance;

    fixture.detectChanges(); // trigger initial data binding
  });

  it(`should be readly initialized`, () => {
    expect<any>(fixture).toBeDefined();
    expect<any>(comp).toBeDefined();
  });

  it(`should be @AngularClass`, () => {
    expect<any>(comp.url).toEqual('https://twitter.com/AngularClass');
    expect<any>(comp.angularclassLogo).toEqual('assets/img/angularclass-avatar.png');
    expect<any>(comp.name).toEqual('Angular 2 Webpack Starter');
  });

  it('should log ngOnInit', () => {
    spyOn(console, 'log');
    expect<any>(console.log).not.toHaveBeenCalled();

    comp.ngOnInit();
    expect<any>(console.log).toHaveBeenCalled();
  });

});
