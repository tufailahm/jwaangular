describe('Protractor testing', function () {
    it('to check the page title', function () {
        browser.ignoreSynchronization = true;
        browser.get("http://localhost:4200/");
        browser.driver.getTitle().then(function (pageTitle) {
            expect(pageTitle).toEqual('JWA Primer Product App');
        });
    });
});