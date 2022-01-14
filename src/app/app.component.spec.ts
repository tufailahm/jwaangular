import { Location } from '@angular/common';
import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './components/payment/payment.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

let location: Location
let router: Router
describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(routes)
            ],
            declarations: [
                AppComponent, WelcomeComponent, PaymentComponent
            ],
        }).compileComponents();
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        router.initialNavigation();
    });
    it('navigate to /welcome redirects you to /welcome ', fakeAsync(() => {
        router.navigate(["welcome"]).then(() => {
            expect(location.path()).toBe("/welcome")
        })
        flush();
    }));

    it('navigate to /payment redirects you to /payment ', fakeAsync(() => {
        router.navigate(["payment"]).then(() => {
            expect(location.path()).toBe("/payment")
        })
        flush();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});












