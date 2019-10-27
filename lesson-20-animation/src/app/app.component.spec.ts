/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App: CompleteGuideFinalWebpack', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    expect(app.title).toBe('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    let el = fixture.debugElement.nativeElement;
    expect(el.querySelector('h1').textContent).toContain(app.title);
  }));
});
