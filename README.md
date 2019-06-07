# HTML5 Application Repository Router


## Prerequisites
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

With regards to `SQLite` and `Make`: if you are running macOS or Linux it's likely that you'll already have SQLite installed. For Windows users, please use the [Chocolatey](https://chocolatey.org/) package manager to install both, [SQLite](https://chocolatey.org/packages/sqlite). and [make](https://chocolatey.org/packages/make). After installation, please check you can start the executables (`sqlite3` and `make`) from the command line.

## Optional: Configuration
You can change path to default app if you wish. To do so, edit the [`xs-app.json`](router/xs-app.json) configuration file of the app router.

## Build
```
make -f Makefile.mta p=cf
```

## Deployment
```
cf deploy mta_archives/html5_router_0.0.1.mtar
```
