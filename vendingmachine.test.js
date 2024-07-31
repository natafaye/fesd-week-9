describe("Tests", () => {
  it("correctly vends", () => {
    var machine = new VendingMachine(items, 10.00);

    Test.assertEquals(machine.vend("A01", 0.60), "Vending Smarties", "Should return 'Vending Smarties'");

  });
  it("correctly vends with change", () => {
    var machine = new VendingMachine(items, 10.00);

    Test.assertEquals(machine.vend("A01", 10.0), "Vending Smarties with 9.40 change.", "Should return 'Vending Smarties with 9.40 change.'");

  });
  it("warns about invalid selection", () => {
    var machine = new VendingMachine(items, 10.00);

    Test.assertEquals(machine.vend("A01", 0.60), "Vending Smarties", "Should return 'Vending Smarties'");
    Test.assertEquals(machine.vend("A01", 10.0), "Vending Smarties with 9.40 change.", "Should return 'Vending Smarties with 9.40 change.'");
    Test.assertEquals(machine.vend("Z01", 0.41), "Invalid selection! : Money in vending machine = 11.20", "Should return 'Invalid selection! : Money in vending machine = 11.20'");

  });
  it("tells you you didn't put in enough money", () => {
    var machine = new VendingMachine(items, 10.00);

    Test.assertEquals(machine.vend("A02", 0.40), "Not enough money!", "Should return 'Not enough money!'");
  });
  it("tells you when items are out of stock", () => {
    var machine = new VendingMachine(items, 10.00);

    Test.assertEquals(machine.vend("B06", 4.60), "Cheese and Onion Crisps: Out of stock!", "Should return 'Cheese and Onion Crisps: Out of stock!'");
  });
});
