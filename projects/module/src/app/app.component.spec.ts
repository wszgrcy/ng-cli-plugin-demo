import { TestBed } from '@angular/core/testing';
import { OtherComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        OtherComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(OtherComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'module'`, () => {
    const fixture = TestBed.createComponent(OtherComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('module');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(OtherComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('module app is running!');
  });
});
