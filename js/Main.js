var http=require("http");
var query=require("querystring");
var server=http.createServer(function(req,res){
    // 当前端使用post发送数据时，数据不在url中，而在data中
    var str="";
    req.on("data",function(_data){
        str=_data.toString();
    });
    req.on("end",function(){
        // req.method  就是请求的方式是get还是post
        if(req.method.toLowerCase()==="get"){
            str=req.url.split("?")[1];
        }
        var obj=query.parse(str);
        var sum=Number(obj.x)+Number(obj.y);
        res.writeHead(200,{
            "content-type":"text/html;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        })
        res.write(sum.toString());
        res.end();
    })
})

server.listen(4010,"localhost");
// ctrl+c  停止服务
// 主要修改了这个js文件，就需要停止原来的服务，并且重新开启