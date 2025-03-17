import getArgs from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printSuccess, printError, printHelp } from "./services/log.service.js";
import { TOKEN_DICTIONARY, saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token) {
    printError("Don't exist");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token was saved");
  } catch (error) {
    printError(error.message);
  }
};

const getForcast = async () => {
  try {    
   const response = await getWeather(process.env.CITY ?? "Uzbekistan");
   console.log(response)
  } catch (error) {
    if(error?.response?.status == 404) {
        printError("City not found")
    } else if (error?.response?.status == 401) {
      printError("Invalid token")
    } else {
      printError(error.message)
    }
  }

}
const startCli = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
  }
  if (args.t) {
    return saveToken(args.t);
  }
getForcast()
};

startCli();
