import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTarefaComponent } from './add-edit-tarefa.component';

describe('AddEditTarefaComponent', () => {
  let component: AddEditTarefaComponent;
  let fixture: ComponentFixture<AddEditTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
