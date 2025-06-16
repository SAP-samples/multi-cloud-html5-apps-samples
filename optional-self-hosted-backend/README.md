# Getting Started

This is a sample CAP application that mimics the Northwind OData service, both [V2](https://services.odata.org/V2/Northwind/Northwind.svc/) and [V4](https://services.odata.org/V4/Northwind/Northwind.svc/). It can optionally be used in conjunction with the [managed-html5-runtime-fiori-launchpad-mta](../managed-html5-runtime-fiori-launchpad-mta) to replace the original Northwind service - demonstrating how to consume CAP service from that sample.

The original public Northwind service does not require any authentication, whereas this CAP project requires XSUAA authentication. By deploying this CAP application in the same Cloud Foundry space as the [managed-html5-runtime-fiori-launchpad-mta](../managed-html5-runtime-fiori-launchpad-mta), you override the destination URL of the original Northwind service with the URL of this CAP service, and additionally set the [HTML5.ForwardAuthToken](./mta.yaml#L82) property. This allows you to consume the CAP service instead of the public Northwind service. The deployment of this CAP application also [binds](./mta.yaml#L87) the CAP service to the XSUAA service already created by the [managed-html5-runtime-fiori-mta](../managed-html5-runtime-fiori-mta/mta.yaml#L74) package.

## Deployment

1. Deploy the `managed-html5-runtime-fiori-mta` to your BTP subaccount as explained in the package documentation.
1. Add the entitlement `hana hdi-shared` to your subaccount if you haven't done so already.
1. Build the project:
   ```
   npm run build
   ```
1. Deploy in the same subaccount/space as the `managed-html5-runtime-fiori-mta` package:
   ```
   cf deploy mta_archives/sample-northwind-cap.mtar
   ```

## Check the Result

### Check the SAP Fiori Application

To make sure to use the new mock service, open an incognito browser window and access the URL of the HTML5 App of the `managed-html5-runtime-fiori-mta` package. You should see (almost) the same data as before, however the product name of the first product will be *Hello from CAP* - this is the mark that the data is read from the CAP service.

![image](https://user-images.githubusercontent.com/51169423/132773806-f1964c2f-4679-4f7c-988a-a55824729f55.png)

