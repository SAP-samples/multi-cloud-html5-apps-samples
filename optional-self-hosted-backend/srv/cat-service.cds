using my.bookshop as my from '../db/data-model';

@(path : '/Northwind/Northwind.svc')
@(requires : 'authenticated-user')
service Northwind.svc {
    @readonly entity Products as projection on my.Products;
}