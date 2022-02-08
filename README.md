# Traffic

This project is the basis behind the [traffic website](https://traffic.gleisdrei.ch/).

This is a [firebase](https://console.firebase.google.com/) project with an [angular](https://angular.io/) frontend and a firebase function proxying the traffic API.

## Development Setup

Run `npm i` to install the dependencies.

### Development Angular application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Development Firebase function

In the `functions` directory run `npm run start` to start the function locally in the emulator.

To override the debug mode and retrieve real data run `OVERRIDE_DEBUG_MODE=true npm run start`.

To add an intentional latency (e.g. 6 seconds) run `DEBUG_RESPONSE_DELAY=6000 npm run start`.