
describe('Payments tests (with setup and teardown)',function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 22;
    })
    it('should update allPayments with submitPaymentInfo',function(){
        submitPaymentInfo();

        expect(allPayments['payment1']).toEqual({
            billAmt: '100',
            tipAmt: '22',
            tipPercent:22,
        })
    })
    it('should not add a new payment if the input is empty with submitPaymentInfo',function(){
        billAmtInput.value = '';
        tipAmtInput.value = 0;
        submitPaymentInfo();
        expect(allPayments['payment1']).toEqual(undefined);
    })
    it('should create and object for curPayment with createCurPayment',function(){
        expect(createCurPayment()).toEqual({
            billAmt: '100',
            tipAmt: '22',
            tipPercent:22,})
    })
    it('should update the paymentTable on appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
    
        appendPaymentTable(curPayment);
    
        let payTable = document.querySelectorAll('#paymentTable tbody tr td');
    
        expect(payTable.length).toEqual(3);
        expect(payTable[0].innerText).toEqual('$100');
        expect(payTable[1].innerText).toEqual('$22');
        expect(payTable[2].innerText).toEqual('22%');

    })
    it('should update the summary table on updateSummary()', function () {
        submitPaymentInfo();
        expect(summaryTds[0].innerText).toEqual('$100');
        expect(summaryTds[1].innerText).toEqual('$22');
        expect(summaryTds[2].innerText).toEqual('22%');

    })
    afterEach(function(){
        paymentId = 0;
        allPayments = {};
        updateSummary()
        paymentTbody.innerHTML = '';
    })
})