describe('Payments test', () => {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
      });

it('should create a new payment on createCurPayment() ', () => {
    let testValues = {
        billAmt: '100',
        tipAmt: '20',
        tipPercent: 20,
    }
    expect(createCurPayment()).toEqual(testValues);
});

it('should append to the table on appendPaymentTable()', () => {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;

    appendPaymentTable(curPayment);

    let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

    expect(curTdList.length).toEqual(4);
    expect(curTdList[0].innerText).toEqual('$100');
    expect(curTdList[1].innerText).toEqual('$20');
    expect(curTdList[2].innerText).toEqual('20%');
})

it('should update the summary table on updateSummary()', () => {
    
    expect(summaryTds).not.toBe('');
});

afterEach( () => {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};
})

});