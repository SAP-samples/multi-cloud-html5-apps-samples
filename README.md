# HTML5 Application Repository Router


## Requirements
- [Create](https://developers.sap.com/tutorials/cp-cf-create-account.html) a Cloud Foundry trial account in the region Europe (Frankfurt)
- Node.js LTS version 10: <https://nodejs.org/en/download/>
- Install mbt
    ```
    npm install -g mbt
    ```
- The Cloud Foundry command line tool cf : <https://docs.cloudfoundry.org/cf-cli/install-go-cli.html> [Tutorial](https://developers.sap.com/tutorials/cp-cf-download-cli.html)
- The Multi-Target Application Cloud Foundry CLI Plugin (CF MTA Plugin) : <https://github.com/cloudfoundry-incubator/multiapps-cli-plugin>
    ```
    cf add-plugin-repo CF-Community https://plugins.cloudfoundry.org
    cf install-plugin multiapps
    ```
- Make : <https://www.gnu.org/software/make/>

    With regards to `Make`: if you are running macOS or Linux it's likely that you'll already have make installed. For Windows users, please use the [Chocolatey](https://chocolatey.org/) package manager to install [make](https://chocolatey.org/packages/make) via `choco install make`. After installation, please check you can start the executable (`sqlite3`) from the terminal.

## Download and Installation
1. Download the source code
    ```
    git clone https://github.com/SAP-samples/cloud-cap-nodejs-codejam/html5-app-repo-router
    cd html5-app-repo-router
    ```
2. Build the project
    ```
    make -f Makefile.mta p=cf
    ```
3. Log in to the Cloud Foundry space
    ```
    cf login -a https://api.cf.eu10.hana.ondemand.com
    ```
4. Deploy the project
    ```
    cf deploy mta_archives/html5_router_0.0.1.mtar
    ```

You can find the URL of the app router after the deployment has been successful in the console output. It will have the following structure: <https://[globalaccount-id]-[subaccount-id]-dev-html5-app-repo-router.cfapps.eu10.hana.ondemand.com>.

## Configuration
You can change path to the default app if you wish. To do so, edit the `welcomeFile` property in the [`xs-app.json`](router/xs-app.json) configuration file of the app router.

You might encounter a `503 Service Temporarily Unavailable` error when there is no HTML5 application which the defined name in the application repository.

## Known Issues
None so far :)

## How to obtain support
This content is provided "as-is" with no other support.

## License
Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
This file is licensed under the SAP Sample Code License except as noted otherwise in the [LICENSE file](LICENSE.pdf).
