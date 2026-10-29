import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app';

describe('AppComponent', () => {
  it('creates the shell', () => {
    TestBed.configureTestingModule({ imports: [AppComponent], providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
