import { style } from '@angular/animations';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HoverFocusDirective } from './hover-focus.directive';
@Component({
  template: '<input type="text" appHoverFocus>'
})
class TestHoverFocusComponent {

}
let component: TestHoverFocusComponent;
let fixture: ComponentFixture<TestHoverFocusComponent>;
let inputElement: DebugElement;
describe('HoverFocusDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHoverFocusComponent, HoverFocusDirective]
    })

    fixture = TestBed.createComponent(TestHoverFocusComponent);
    component = fixture.componentInstance;
    inputElement = fixture.debugElement.query(By.css('input'))
  })
  it('should change the color to yellow on mouse over', () => {

    inputElement.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(inputElement.nativeElement.style.backgroundColor).toBe('yellow');
  });

  it('should change the color to pink on mouse out', () => {
    inputElement.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(inputElement.nativeElement.style.backgroundColor).toBe('pink');
  });


  it('should create an instance', () => {
    const directive = new HoverFocusDirective();
    expect(directive).toBeTruthy();
  });
});

//Create a dummy component 
//create a element i.e textbox which will use the directive to test
