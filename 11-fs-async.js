const { readFile, writeFile } = require('fs')

readFile('./folder/subfolder/first.txt','utf8', (err, result) => {
        if (err) {
                console.log(err)
                return
        }
        const first = result;
        readFile('./folder/subfolder/second.txt', 'utf8', (err, result) => {
                if (err) {
                        console.log(err)
                        return
                }
                const second = result;
                writeFile('./folder/subfolder/third.txt',
                `Here is the result : ${first}, ${second}`, 
                (err, result) => {
                        if (err){
                                console.log(err)
                                return
                        }
                        console.log(result)
        })})
})