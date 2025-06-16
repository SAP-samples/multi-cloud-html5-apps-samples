# Basic HTML5 Application with a Managed Application Router

## Diagram

![diagram](diagram.png)

## Description

This is an example of an HTML5 app that is accessed by a managed application router and is integrated into SAP Build Work Zone, standard edition (formerly SAP Launchpad service). During the build process (`mbt build`), the  app is compressed into a zip file. During the deployment (`cf deploy`), the HTML5 app is pushed to the HTML5 Application Repository and uses the Authentication & Authorization service (XSUAA service) and the destination service.

## Download and Deployment

1. Subscribe to [SAP Build Work Zone, standard edition](https://developers.sap.com/tutorials/cp-portal-cloud-foundry-getting-started.html), if you haven't done so before.
1. Download the source code:
    ```
    git clone https://github.com/SAP-samples/multi-cloud-html5-apps-samples
    cd multi-cloud-html5-apps-samples/managed-html5-runtime-basic-mta
    ```
1. Build the project:
    ```
    npm install
    npm run build
    ```
1. Deploy the project:
    ```
    cf deploy mta_archives/managed-html5-runtime-basic-mta.mtar
    ```
1. See the URL of the web app:
    ```
    cf html5-list -di sample-basic-html5-destination-service -u --runtime launchpad
    ```

> Use the following command in case you use the Portal service:
>
>  `cf html5-list -di sample-basic-html5-destination-service -u --runtime cpp`


## Check the Result

### List the Deployed HTML5 Apps
```
$ cf html5-list -di sample-basic-html5-destination-service -u --runtime launchpad                                 
Getting list of HTML5 applications in org 9f10ed8atrial / space dev as firstname.lastname@domain.com...
OK

name                  version   app-host-id                            service name                     destination name               destination service name                 last changed                    url   
samplebasichtml5mta   0.0.1     66d2a9fd-9f24-48f0-a05a-f6ffe5a1fcdd   multi-cloud-html5-apps-samples   sample-basic-html5-repo-host   sample-basic-html5-destination-service   Wed, 30 Apr 2025 12:37:20 GMT   https://e983544etrial.launchpad.cfapps.us10.hana.ondemand.com/ff91dc2c-9a21-4ac2-a2f6-914610750dd3.multi-cloud-html5-apps-samples.samplebasichtml5mta-0.0.1/   
```

### List the Deployed MTA

```
$ cf mta sample-basic-html5-mta
Showing health and status for multi-target app sample-basic-html5-mta in org e983544etrial / space dev as nicolai.schoenteich@sap.com...
OK
Version: 1.0.0
Namespace: 

Apps:
name   requested state   instances   memory   disk   urls

Services:
name                                     service           plan          bound apps   last operation
sample-basic-html5-repo-host             html5-apps-repo   app-host                   create succeeded
sample-basic-html5-uaa                   xsuaa             application                create succeeded
sample-basic-html5-destination-service   destination       lite                       create succeeded

```

### Check the HTML5 App

Access the URL described in [Download and Deployment](#download-and-deployment) to view the web app. You are redirected to a sign-on page before you can see the web app.

![webapp](result.png)
