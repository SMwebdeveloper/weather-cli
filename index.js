import getArgs from "./helpers/args.js"
import { printSuccess, printError, printHelp } from "./services/log.service.js"
const startCli = () => {
    const args = getArgs(process.argv)
    console.log(args)
   

    if(args.h) {
        printHelp()
    }
}

startCli()