const page = require('../../page');
const helper = require('../../helper')

//it launced just fine for me.

describe('Create an order', () => {

      //Task 1
    it('should save the address', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await expect($(page.fromField)).toHaveValue('East 2nd Street, 601');
        await expect($(page.toField)).toHaveValue('1300 1st St');
    })

    //Task 2
    it('should select supportive plan', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan;
        const supportiveButton = await $(page.supportiveButton);
        await expect(supportiveButton).toBeDisplayed();
    })
    //Task 3
    it('should save the phone #', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    //Task 4
    it('should add a credit card', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    
        const testCardNumber = "123400004321"; // Use a string
        const testCVV = "12"; // Use a string for CVV
        await page.addPaymentMethod(testCardNumber, testCVV);
    
        await expect($(page.cardDisplay)).toBeExisting();
    })

    //Task 5
    it('should write message for driver', async () => {
        await browser.url("/");
        await page.fillAddresses("East 2nd Street, 601", "1300 1st St");
        const message = "wait for ya boy!";
        await page.writeDriverMessage(message);
        const messageField = await $(page.commentField);
        await expect(messageField).toHaveValue(message);
    })

        //Task 6
        it('should order blanket and handkerchiefs', async () => {
            await browser.url(`/`);
            await page.fillAddresses("East 2nd Street, 601", "1300 1st St");
            await page.selectSupportivePlan();
            await page.orderBlanketAndHandkerchiefs()
            await expect($(page.blanketSwitch)).toBeChecked()
        })
    })

        //Task 7
    it('should order 2 ice creams', async () =>{
        await browser.url("/");
        await page.fillAddresses("East 2nd Street, 601", "1300 1st St");
        await page.selectSupportivePlan();
        await page.orderIceCreams();
        const iceCreamValue = 2;
        await expect($(`div=${iceCreamValue}`)).toBeExisting();

    })

        //Task 8
    it('should display car search modal', async () => {
        await browser.url("/");
        await page.fillAddresses("East 2nd Street, 601", "1300 1st St");
        await page.selectVehicleType("Supportive");
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        const message = "Please pick me up quickly.";
        await page.writeDriverMessage(message);
        await page.clickPlaceOrderButton();
        const carSearchModal = await $('div=Car search'); 
        await carSearchModal.waitForDisplayed({ timeout: 45000 });
        await expect(carSearchModal).toHaveText("Car search");
    })

    it ("should wait for the driver info to appear in the modal", async () => {
        await browser.url("/");
        await page.fillAddresses("East 2nd Street, 601", "1300 1st St");
        await page.selectVehicleType("Supportive");
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await page.writeDriverMessage("Please pick me up quickly.");
        await page.clickPlaceOrderButton();
        await browser.pause(30000);
        await expect($(`${page.driverInfoModal}`)).toBeExisting();
      }
    );
