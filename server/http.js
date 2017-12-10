const http = require('http');
const url = require('url');


const server = http.createServer();

server.on('request',(req,res)=>{
	const reqUrl = req.url;
    res.setHeader("Access-Control-Allow-Origin","*");
    if(/(\/recommendPage|\/post|\/book-list)/.test(reqUrl)){
        const getUrl = 'http://api.zhuishushenqi.com';
        var request = http.request(getUrl + reqUrl);
        request.on('response',(response)=>{
        	var c = ''
            response.setEncoding('utf8');
            response.on('data',(chunk)=>{
            	c += chunk
            })
            response.on('end',()=>{
            	res.writeHead(200,response.headers)
            	res.write(c)
            	res.end()
            })
        })
        request.on('error',(err)=>{
            res.writeHead(400,{
            	'Content-Type':'application/json'
            })
            res.write({"err":err})
        })
        request.end()
    }else if(/\/chapter/.test(reqUrl)){
        const getUrl = 'http://chapterup.zhuishushenqi.com';
        var request = http.request(getUrl + reqUrl);
        request.on('response',(response)=>{
        	var c = '';
        	response.setEncoding('utf8');
        	response.on('data',(chunk)=>{
        		c += chunk
        	})
            response.on('end',()=>{
                res.writeHead(200,response.headers)
                res.write(c)
                res.end()
            })
        })
        request.on('end',()=>{
        	res.writeHead(200,response.headers)
        	res.write(c)
        	res.end()
        })
        request.end()
    }
})


server.listen('3001',()=>{
    console.log('server is listen ar port : 3001')
})