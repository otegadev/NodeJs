const {readFile, writeFile} = require("fs").promises;
//const util = require('util')
//const readFilePromise = util.promisify(readFile)
//const writeFilePromise = util.promisify(writeFile)

const start = async() =>{
        try {
                const first = await readFile('./folder/subfolder/first.txt','utf8')
                const second = await readFile('./folder/subfolder/second.txt', 'utf8')  
                console.log(first, second)
                await writeFile('./folder/subfolder/result-mind.txt', `This is Awesome, ${first}:${second}`, {flag : 'a'})
        } catch (error) {
                console.log(error)
        }
        
        
}
start()


//const getText = (path) => {
        //      return new Promise((resolve, reject) => {
          //            readFile(path ,'utf8', (err,data) =>{
            //                 if(err){
              //                        reject(err)
                //              } else {
                  //                    resolve(data)
                    //          }
                      //})})
      //}
      


//getText('./folder/subfolder/first.txt')
//.then((result) => console.log(result))
//.catch((err) => console.log(err))

