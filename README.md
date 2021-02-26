# Quasar App (map_frontend)

A Quasar Framework app

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

### Run on electron
```bash
quasar dev -m electron -- --no-sandbox --disable-setuid-sandbox
```
https://quasar.dev/quasar-cli/developing-electron-apps/build-commands

### Build 
pre build
* api: pyinstaller --onefile hello.py  
* app: quasar build --mode electron 
