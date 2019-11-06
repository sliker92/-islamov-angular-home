/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { DataService } from '../shared/data.service';
import { DebugElement } from '@angular/core';

describe('Component: User', () => {
  let fixture: ComponentFixture<UserComponent>;
  let app: UserComponent;
  let elNat: HTMLElement;
  let el: DebugElement;
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });

    fixture = TestBed.createComponent(UserComponent);
    app = fixture.debugElement.componentInstance;
    elNat = fixture.debugElement.nativeElement;
    el = fixture.debugElement;
    dataService = el.injector.get(DataService);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    fixture.detectChanges();
    let component = fixture.debugElement.componentInstance; // cause userService is private;
    expect(app.user).toBe(component.userService.user);
  });

  it('should display the user name if user is logged in', () => {
    app.isLoggedIn = true;
    fixture.detectChanges();
    expect(elNat.querySelector('p').textContent).toContain(app.user.name);
  });

  it('shouldn\'t display the user name if user is not logged in', () => {
    app.isLoggedIn = false;
    fixture.detectChanges();
    expect(elNat.querySelector('p').textContent).toBeTruthy();
  });

  it('shouldn\'t fetch data successfully if not called asynchronously', () => {
    spyOn(dataService, 'getDetails').and.callThrough();
    app.ngOnInit();
    expect(app.data).toBeUndefined();
    expect(dataService.getDetails).toHaveBeenCalled();
  });

  it('should fetch data successfully if called asynchronously', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(app.data).toBe('Data');
    });
  }));

  it('should fetch data successfully if called asynchronously', fakeAsync(() => {
    fixture.detectChanges();
    tick(1500);
    expect(app.data).toBe('Data');
  }));
});
