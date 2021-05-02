describe('Helpers test', () => {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('should calculate the sum of object keys', () => {
            expect(sumPaymentTotal('billAmt')).toEqual(100);
        
            billAmtInput.value = 200;
            tipAmtInput.value = 40;
        
            submitPaymentInfo();
        
            expect(sumPaymentTotal('billAmt')).toEqual(300);
    });

    it('should calculate tip percentage', () => {
        expect(calculateTipPercent(100, 23)).toEqual(23);
        expect(calculateTipPercent(111, 11)).toEqual(10);
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
      });
});