# SAP Fiori App with a Managed Application Router Exposed to SAP Launchpad Service

## Diagram

![diagram](diagram.png)


## Description

This is an example of two SAP Fiori apps ([HTML5Module1](./HTML5Module1/) and [HTML5Module2](./HTML5Module2/)) that are configured to run with the managed application router. The apps are exposed to SAP Build Work Zone, standard edition and are visible in the content manager of the launchpad. The apps are deployed to the HTML5 Application Repository via the Cloud Foundry environment and use the Authentication & Authorization service (XSUAA service) and the destination service. 

1. The [HTML5Module1](./HTML5Module1/) consumes the public [Northwind OData service](https://services.odata.org/v2/Northwind/Northwind.svc), to use instead a CAP service with required authentication look at [optional-self-hosted-backend](../optional-self-hosted-backend/)

2. The [HTML5Module2](./HTML5Module2/) is a freestyle OpenUI5 application that uses an npm package for a custom control as described in [this blog post](https://blogs.sap.com/2021/11/15/using-npm-packages-in-ui5-without-shims/).

## Download and Deployment
1. Subscribe to the [SAP Build Work Zone, standard edition](https://developers.sap.com/tutorials/cp-portal-cloud-foundry-getting-started.html) if you haven't done so before.
2. Download the source code:
    ```
    git clone https://github.com/SAP-samples/multi-cloud-html5-apps-samples
    cd multi-cloud-html5-apps-samples/managed-html5-runtime-fiori-launchpad-mta
    ```
3. Build the project:
    ```
    npm install
    npm run build
    ```
4. Deploy the project:
    ```
    npm run deploy:cf
    ```
    or
    ```
    cf deploy mta_archives/managed-fiori_1.0.0.mtar
    ```
5. List the deployed HTML5 apps:
    ```
    cf html5-list -di managed-fiori-destination -u --runtime launchpad
    ```

> Use the following command in case you use the Portal service
>
>  `cf html5-list -di managed-fiori-destination -u --runtime cpp`


## Check the Result

### List the Deployed HTML5 Apps
```
$ cf html5-list -di managed-fiori-destination -u --runtime launchpad-u                               
Getting list of HTML5 applications in org [cf-org-name] / space dev as firstname.lastname@domain.com...
OK

name             version   app-host-id                            service name    destination name                  last changed                    url   
comsapfioriapp   1.0.0     b14e8922-77d3-42bf-8de0-2d9e8aa2c793   cloud.service   managed-fiori-destination-html5   Mon, 27 Mar 2023 11:20:17 GMT   https://nicolai-geburek-c8wbb6sc.launchpad.cfapps.eu10.hana.ondemand.com/97e830d3-6bc6-413a-9408-17a44bbaa3f7.cloudservice.comsapfioriapp-1.0.0/
comsapdemo       0.0.1     b14e8922-77d3-42bf-8de0-2d9e8aa2c793   cloud.service   managed-fiori-destination-html5   Mon, 27 Mar 2023 11:20:18 GMT   https://nicolai-geburek-c8wbb6sc.launchpad.cfapps.eu10.hana.ondemand.com/97e830d3-6bc6-413a-9408-17a44bbaa3f7.cloudservice.comsapdemo-0.0.1/ 
```

> You need to substitute `cpp` with `launchpad`, in case you use the Launchpad service (instead of the Portal service).

### List the Deployed MTA

```
$ cf mta managed-fiori
Showing health and status for multi-target app hello-world in org [cf-org-name] / space dev as firstname.lastname@domain.com...
OK
Version: 1.0.0

Apps:
name   requested state   instances   memory   disk   urls   

Services:
name                                service           plan          bound apps   last operation   
managed-launchpad-destination       destination       lite                       update succeeded   
managed-launchpad-html5-repo-host   html5-apps-repo   app-host                   update succeeded   
managed-launchpad-uaa               xsuaa             application                update succeeded  
```


### List the Deployed Content with the Content Explorer

![Content Explorer](contentExplorer.png)


### Check the HTML5 Apps

Access one of the URLs described in the [Download and Deployment](#download-and-deployment) section. You are redirected to a sign-on page before you can see the app.

![HTML5Module1](HTML5Module1.png)
