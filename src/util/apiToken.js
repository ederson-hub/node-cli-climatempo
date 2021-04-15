import fs from 'fs'
import {join} from 'path'

const tokenFilePath = join(__dirname, 'token')

function saveApiToken(apiToken){
    return new Promise((resolve, reject) =>{
        try{
            fs.writeFile(tokenFilePath, apiToken,(error)=>{
                if(error){
                    reject(error)
                }
                resolve()
            })
        }catch(error){
            reject(error)
        }
    })
}

function getApiToken(){
    return new Promise((resolve, reject)=>{
        try {
            fs.readFile(tokenFilePath, 'utf8', (error,token)=>{
                if(error || token === ''){
                    reject('Precisa informar um token. Gere um token aqui: https://advisor.climatempo.com.br')
                }
                resolve(token)
            })
        }catch(error){
            reject(error)
        }
    })
}

export{
    saveApiToken,
    getApiToken
}