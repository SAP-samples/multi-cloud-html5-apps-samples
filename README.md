# Examples of HTML5 Applications for SAP Cloud Platform Multi-Cloud Environment 


This repository contains examples of HTML5 Applications for the SAP Cloud Platform Cloud Foundry environment. The examples show how you can use standalone application routers or HTML5 Applications Runtime managed by SAP Cloud Platform or to achieve different goals and  they demonstrate the capabilities of HTML5 Application Repository service in the Cloud Foundry environment.

On the Cloud Foundry environment of SAP Cloud Platform you can run an application that was uploaded to HTML5 Application Repository using one of the following options: Standalone Application Router or HTML5 Applications Runtime Managed by SAP Cloud Platform. Both options allow you to serve static content from HTML5 Application Repository, authenticate users, rewrite URLs, and forward or proxy requests to other micro services while propagating user information. However, the option that is managed by SAP Cloud Platform brings many benefits, such as:
- Simplify and speed up your development and deployment experience
- Save resources by running a serverless HTML5 application, which doesn’t require any application runtime
- Lower maintenance efforts by leveraging the most up-to-date routing capabilities
- Meet the changing demand for HTML5 applications by automatically adjusting the service to maintain consistent and predictable performance

Therefore, we recommend using the standalone Application Router only in advanced cases, for example when application router extensibility is required.

For more information, see 
- [Developing HTML5 Applications Managed by SAP Cloud Platform](https://help.sap.com/viewer/ad4b9f0b14b0458cad9bd27bf435637d/Cloud/en-US/c1b9d6facfc942e3bca664ae06387e9b.html)
- [Developing HTML5 Applications in the Cloud Foundry Environment](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/11d77aa154f64c2e83cc9652a78bb985.html)



Before you start with the examples, please make sure that you are familiar with the basic concepts of HTML5 web apps in Cloud Foundry, such as Cloud Foundry applications, services, service bindings. For more information, see [this video](https://www.youtube.com/watch?v=emnl-y9btdU).

The HTML5 Application Repository can hold any UI project independent of the used framework. Use the following commands of the [Cloud Foundry CLI plugin](https://sap.github.io/cf-html5-apps-repo-cli-plugin/) plugin to upload the HTML5 apps to the application repository:

```bash
mkdir myapp
cd myapp
echo '{"sap.app":{"id":"myapp","applicationVersion":{"version": "1.0.0"}}}' > manifest.json
echo '{"routes":[{"source":"^(.*)","target": "$1","service":"html5-apps-repo-rt"}]}' > xs-app.json
cf html5-push
```

For information about how to upload a react-based application to the HTML5 Application Repository, see [this blog post](https://blogs.sap.com/2019/06/03/cloudfoundryfun-5-play-asteroids-powered-by-react-secured-by-sap-cloud-platform/).

## Requirements
- You have an SAP Cloud Platform trial account in the region Europe (Frankfurt). For creating the trial account, see this [tutorial](https://developers.sap.com/tutorials/hcp-create-trial-account.html).
- Node.js LTS version 10 is installed: <https://nodejs.org/en/download>
- Cloud Foundry Command Line tool (cf CLI)  is installed. For more information, see this [tutorial](https://developers.sap.com/tutorials/cp-cf-download-cli.html)
- The Multi-Target Application Cloud Foundry CLI [Plugin](https://github.com/cloudfoundry-incubator/multiapps-cli-plugin) (MultiApps CF CLI Plugin) is installed : 
    ```
    cf add-plugin-repo CF-Community https://plugins.cloudfoundry.org
    cf install-plugin multiapps
    ```
- GNU Make : <https://www.gnu.org/software/make>

    If you are running macOS or Linux it's likely that you already have Make installed. As a Windows user, please use the [Chocolatey](https://chocolatey.org/) package manager to install [Make](https://chocolatey.org/packages/make) via `choco install make`. After the installation, please check you can start the executable (`make`) from the terminal.


## HTML5 Apps Running on a Standalone Application Router

- [App directly embedded into Cloud Foundry environment](standalone-approuter-html5-local-dir/)


- [App stored on HTML5 Application Repository](standalone-approuter-html5-runtime)

- [App stored on HTML5 Application Repository, using  XSUAA service, and destination service](standalone-approuter-html5-runtime-mta-hello-world)


- [App integrated with SAP Cloud Platform Portal](standalone-portal-mta)


- [App integrated with SAP Cloud Platform Portal  and  using UI5 flexibility service for key users](standalone-portal-keyuser-mta)




## HTML5 App Using the HTML5 Applications Runtime Managed by SAP Cloud Platform

In contrast to the examples above, there is no application router, and therefore, no application runtime is needed for these projects. The advantage is a lower total cost of ownership (TCO) and that there is no need to update the application router manually. 

- [HTML5 app that is managed by SAP Cloud Platform with XSUAA service and destination service](managed-html5-runtime-mta-hello-world)


## Known Issues
None so far :)

## Support
This content is provided "as-is" with no other support.

## License
Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the SAP Sample Code License except as noted otherwise in the [LICENSE file](LICENSE).
