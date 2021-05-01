
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 50000,
    years: 10,
    rate: 2
  };
  expect(calculateMonthlyPayment(values)).toEqual('460.07');
});


it("should return a result with 2 decimal places", function() {
  // const values = {
  //   amount: 1000,
  //   years: 5,
  //   rate: 9
  // };
  // expect(calculateMonthlyPayment(values)).toEqual('20.76');

  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

/// etc
