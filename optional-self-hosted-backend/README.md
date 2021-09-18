# Getting Started

This is an example of how to consume a CAP service with authentication from on SAP Fiori app.

The [managed-html-runtime-fiori-mta](https://github.com/SAP-samples/multi-cloud-html5-apps-samples/tree/master/managed-html5-runtime-fiori-mta) sample consumes the [Northwind odata.org service](../managed-html5-runtime-fiori-mta/destination.json#L14), this is a public service without any kind of authentication.

This project [mocks](./srv/cat-service.cds#L3) the Northwind service and [override](./mta.yaml#L88) the URL of the original `Northwind` destination with the URL of the mockup service.  
The service is exposed as a CAP service with required [authentication](./srv/cat-service.cds#L4), deploy of this package set the necessary property [HTML5.ForwardAuthToken](./mta.yaml#L90).
This property is documented at  [Configure Destinations](https://help.sap.com/viewer/ad4b9f0b14b0458cad9bd27bf435637d/LATEST/en-US/fab4035652cb4fc48503c65dc841d335.html)

The MTA file [bind](./mta.yaml#L35) the CAP service to the xsuaa service already created by the `managed-html5-runtime-fiori-mta` package.

## Deployment

1. Deploy the `managed-html5-runtime-fiori-mta` to you BTP subaccount as explained in the package documentation
2. Add the entitlement `hana hdi-shared` to your subaccount if you haven't done so before
3. Build the project:
   ```
   mbt build
   ```
4. Deploy in the same subaccount/space of the `managed-html5-runtime-fiori-mta` package:
   ```
   cf deploy mta_archives/cap-service_1.0.0.mtar
   ```
## Check the Result

### Check the HTML5 App
To be sure to use the new mock service open an incognito browser window and then access the URL of the HTML5 App of the `managed-html5-runtime-fiori-mta` package, you should see the same data, however the product name of the first product will be *Hello from CAP*, this is the mark that the data are read from the CAP service.

![image](https://user-images.githubusercontent.com/51169423/132773806-f1964c2f-4679-4f7c-988a-a55824729f55.png)

