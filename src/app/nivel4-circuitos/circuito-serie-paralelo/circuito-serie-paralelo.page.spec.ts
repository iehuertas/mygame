import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CircuitoSerieParaleloPage } from './circuito-serie-paralelo.page';

describe('CircuitoSerieParaleloPage', () => {
  let component: CircuitoSerieParaleloPage;
  let fixture: ComponentFixture<CircuitoSerieParaleloPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CircuitoSerieParaleloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CircuitoSerieParaleloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
