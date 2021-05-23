import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesComponent } from './pages.component';

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'GITHUB-USER APP'`, () => {
    fixture = TestBed.createComponent(PagesComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('GITHUB-USER APP');
  });

  it('should render title', () => {
    fixture = TestBed.createComponent(PagesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.toolbar span').textContent).toContain('GITHUB-USER APP');
  });
});
