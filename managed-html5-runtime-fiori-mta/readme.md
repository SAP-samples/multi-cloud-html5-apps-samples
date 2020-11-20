# SAP Fiori app on HTML5 Runtime Managed by SAP Cloud Platform

## Diagram

![diagram](diagram.png)


## Description

This is an example of an SAP Fiori app that is managed by SAP Cloud Platform. The SAP Fiori app is exposed to an SAP Cloud Platform Launchpad and is visible in the content manager of the launchpad. The app is deployed to the HTML5 Application Repository and uses the Authentication & Authorization service (XSUAA service) and the destination service. 

The web app that is contained in the `uimodule.zip` defines the following properties in the `manifest.json` file. Otherwise, the correspoding values in the `mta.yaml` descriptor need to be updated as well.

```JSON
{
  "sap.cloud": {
    "public": true,
    "service": "cloud.service"
  },
  "sap.app": {
    "id": "com.myorg.FLP",
    "applicationVersion": {
      "version": "1.0.0"
    }
  },
  "sap.ui5": {
    "dependencies": {
        "minUI5Version": "1.65.0"
    }
  }
}
```

## Download and Deployment
1. Subscribe to the [launchpad service](https://developers.sap.com/tutorials/cp-portal-cloud-foundry-getting-started.html) if you haven't done so before.
1. Download the source code:
    ```
    git clone https://github.com/SAP-samples/multi-cloud-html5-apps-samples
    cd multi-cloud-html5-apps-samples/managed-html5-runtime-fiori-mta
    ```
2. Build the project:
    ```
    npm install
    npm run build
    ```
3. Deploy the project:
    ```
    npm run deploy:cf
    ```
    or
    ```
    cf deploy mta_archives/managed_fiori_1.0.0.mtar
    ```

If the deployment has been successful, you will be able to form the URL of the app based on the URL of launchpad. It will have the following structure: <https://[globalaccount-id].launchpad.cfapps.[region].hana.ondemand.com/cloudservice.comsapfioriapp/index.html#Shell-home>

## Check the Result

### List the Deployed HTML5 Apps
```
$ cf html5-list                                     
Getting list of HTML5 applications in org 9f10ed8atrial / space dev as firstname.lastname@domain.com...
OK

name          version   app-host-id                            service instance                    visibility   last changed   
commyorgFLP   1.0.0     615b773a-e5f8-4f9b-b5c0-f082fe275364   managed_launchpad_html5_repo_host   public       Tue, 15 Sep 2020 13:44:55 GMT    
```

### List the Deployed MTA

```
$ cf mta hello-world
Showing health and status for multi-target app hello-world in org 9f10ed8atrial / space dev as firstname.lastname@domain.com...
OK
Version: 1.0.0

Apps:
name   requested state   instances   memory   disk   urls   

Services:
name                                service           plan          bound apps   last operation   
managed_launchpad_destination       destination       lite                       update succeeded   
managed_launchpad_html5_repo_host   html5-apps-repo   app-host                   update succeeded   
managed_launchpad_uaa               xsuaa             application                update succeeded  
```


### List the Deployed Content with the Content Explorer

![Content in Content Explorer](contentExplorer.png)


### Check the HTML5 App

Access the URL described in [Download and Deployment](#download-and-deployment) to view the web app. You are redirected to a sign-on page before you can see the web app.

![webapp](result.png)
