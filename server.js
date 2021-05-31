const http = require('http')
const fs = require('fs')
let count = 0

const server = http.createServer ((req,res) => {
   
    let index = fs.readFileSync('./views/index.html', (err,data) => {
        if (err) return err
        return data
    })

    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'Home.html'
            count++
            break;
        case '/Product':
            path+='Product.html'
            count++
            break;
        case '/Contact':
            path+='Contact.html'
            count++
            break;
        default:
           path += '404.html'
            break;
    }
    fs.readFile(path, (err, data)=> {
        if (err) res.write( err ) 
        res.write( index + data + `<p> WebSite visted :${count} times</p> </div>` )
        res.end()
    })
  
    
}) 

server.listen(8000, 'localhost', () => {
    console.log('Server is listening on 8000')
})