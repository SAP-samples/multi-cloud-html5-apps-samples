namespace my.bookshop;

entity Products {
    key ProductID: Integer;
        ProductName: String;
        SupplierID: Integer;
        CategoryID: Integer;
        QuantityPerUnit: String;
        UnitPrice: Decimal;
        UnitsInStock: Integer;
        UnitsOnOrder: Integer;
        ReorderLevel: Integer;
        Discontinued: Boolean;
}

