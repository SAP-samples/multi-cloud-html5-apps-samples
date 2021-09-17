# Getting Started

This CAP project mocks the Northwind Product service available at:  
`https://services.odata.org/v2/Northwind/Northwind.svc/Products`

After the deploy of the MTA the service response at the same path `/v2/Northwind/Northwind.svc/Products`, this means that you can replace the address in the BTP service destination  `Northwind` created by the `managed-html5-runtime-fiori-mta` sample and you will get the same results.

This package contains the same sample data of the original Northwind service.

As defined in the file `srv/cat-service.cds` the CAP service requires authentication, so in the `Northwind` destination you have to change the address and you have to set the `HTML5.ForwardAuthToken` additional property too.   
This property is documented at  [Configure Destinations](https://help.sap.com/viewer/ad4b9f0b14b0458cad9bd27bf435637d/LATEST/en-US/fab4035652cb4fc48503c65dc841d335.html)

The MTA file bind the CAP service to the xsuaa service already created by the `managed-html5-runtime-fiori-mta` package.

## Deployment

1. Deploy the `managed-html5-runtime-fiori-mta` to you BTP subaccount as explained in the package documentation
2. Add the entitlement `hana hdi-shared` to your subaccount if you haven't done so before
3. Build the project:
   ```
   mbt build
   ```
4. Deploy the package in the same subaccount/space of the `managed-html5-runtime-fiori-mta` package:
   ```
   cf deploy mta_archives/cap-service_1.0.0.mtar
   ```
5. See the URL of the CAP service:
   ```
   cf app cap-service-srv
   ```
6. Set the address of the `Northwind` destination to the URL of CAP service
7. Set the additional property `HTML5.ForwardAuthToken` to `true`

![image](https://user-images.githubusercontent.com/51169423/132773729-253d5b06-8631-4c09-9090-cff7f4a116e8.png)

## Check the Result

### Check the HTML5 App
To be sure to use the new address set in the destination open an incognito browser window and access the URL of the HTML5 App of the `managed-html5-runtime-fiori-mta` package, you should see the same data, however the product name of the product with ID 1 will be *Hello from CAP*, this is the mark that the data are read from the CAP service.

![image](https://user-images.githubusercontent.com/51169423/132773806-f1964c2f-4679-4f7c-988a-a55824729f55.png)

