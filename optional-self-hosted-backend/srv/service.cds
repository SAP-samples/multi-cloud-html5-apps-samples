using my.northwind as my from '../db/schema';

@protocol: [
    {
        kind: 'odata-v4',
        path: '/Northwind/Northwind.svc'
    },
    {
        kind: 'odata-v2',
        path: '/v2/Northwind/Northwind.svc'
    }
]
service Northwind.svc {
    @readonly
    entity Products as projection on my.Products;
	entity Suppliers as projection on my.Suppliers;
}
