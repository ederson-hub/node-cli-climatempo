import program from 'commander'
import { version} from '../package.json'
import getCityForecast from './main'
import {saveApiToken} from './util/apiToken'

export function init (args){
    program
    .version(version, '-v, --version', 'Mostra a versão da ferramenta')
    .option('-t --token [token]', 'Advisor ClimaTempo API token')
    .arguments('<cityName...>')
    .description('Mostra o clima de uma cidade em tempo real')
    .action(async(cityName)=>{
        if(program.token){
            await saveApiToken(program.token)
        }
        getCityForecast(cityName.join(' '))
    })
    .on('--help', () => {
        console.log()
        console.log('Exemplos:')
        console.log('$ clima em Curitiba')
        console.log('$ clima em São Paulo')
    })
    program.parse(args)
}