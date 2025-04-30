namespace my.northwind;

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
		Supplier: Association to Suppliers;
}

entity Suppliers {
	key SupplierID: Integer;
	Products: Association to Products;
}
