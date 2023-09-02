const http = require('http')

const server = http.createServer((req, res) => {
        if(req.url === '/'){
                res.end('Home Page')
        }
        if(req.url === '/about'){
                res.end('About Page')
        }
        res.end('Error!')
})

server.listen(7000, () =>{
        console.log('Server is listening on port 5000')
})

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