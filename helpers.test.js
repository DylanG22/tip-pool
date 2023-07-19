
describe('Helpers test (with setup and teardown)', function(){
    beforeEach(function(){
    billAmtInput.value = 100;
    tipAmtInput.value = 22;
    submitPaymentInfo();
    })
    
    it('should sum multiple bills with sumPaymentTotal',function(){
        expect(sumPaymentTotal('billAmt')).toEqual(100);
        billAmtInput.value = 48;
        tipAmtInput.value = 10;
        submitPaymentInfo();
        billAmtInput.value = 73;
        tipAmtInput.value = 16;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(221);

    })

    it('should sum multiple tips with sumPaymentTotal',function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(22);
        billAmtInput.value = 48;
        tipAmtInput.value = 10;
        submitPaymentInfo();
        billAmtInput.value = 73;
        tipAmtInput.value = 16;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(48);
    })
    it('should sum total tip percent on sumPaymentTotal',function(){
        expect(sumPaymentTotal('tipPercent')).toEqual(22);
        billAmtInput.value = 48;
        tipAmtInput.value = 10;
        submitPaymentInfo();
        billAmtInput.value = 73;
        tipAmtInput.value = 16;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(65);
    })

    it('should calculate the correct tip percent with calculateTipPercent',function(){
        expect(calculateTipPercent(200,50)).toEqual(25);
        expect(calculateTipPercent(44,12)).toEqual(27);
        expect(calculateTipPercent(0,0)).toEqual(NaN);
    })
    it('should generate a new td with the value and append to the tr with appendTd',function(){
        let newTr = document.createElement('tr');

        appendTd(newTr, 'bill');
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('bill');
    })
    afterEach(function(){
        paymentId = 0;
        allPayments = {};
        updateSummary()
        paymentTbody.innerHTML = '';
    })
})