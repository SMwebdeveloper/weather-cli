import chalk from "chalk";
import dedent from "dedent-js";
const printError = (error) => {
  console.log(chalk.bgRed("Error") + " " + error);
};
const printSuccess = (message) => {
  console.log(chalk.bgGreen("Success") + " " + message);
};

const printHelp = () => {
  console.log(dedent`
    ${chalk.bgCyan("HELP")}
    -s [CITY] for install city
    -h for help
    -t [API_KEY] for saving token`);
};

const printWeather = (response) => {
  console.log(dedent`
    ${chalk.bgYellowBright("WEATHER")} City weather ${response.name}
    ${response.weather[0].description}
    Temperature: ${response.main.temp} (feels like ${response.main.feels_like})
    Humidity: ${response.main.humidity}%
    Wind speed: ${response.wind.speed}
  `)
}
export { printError, printSuccess, printHelp,printWeather };
