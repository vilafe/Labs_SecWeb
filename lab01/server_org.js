const http = require('http');
const fs = require('fs');
const url = require('url');
const pathutil = require("path");

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((rq, rs) => {
	let query = url.parse(rq.url, true);
	let data = query.query;
	let filename = query.pathname;
	let path = filename;
	try {path = pathutil.normalize(path);path = pathutil.basename(path);
	    if(pathutil.extname(path) !== '.html'){rs.writeHead(400);rs.end('Only html files');return;}
    } catch(err) {rs.writeHead(500);rs.end('Error');
        return;
    }
	if(filename === "/login.html") {
        rs.writeHead(200);
        rs.end(fs.readFileSync(
            process.env.HOME + "/home/vila/Labs_SecWeb/lab01/login.html", 'utf8'));
        return
    }
	if(filename === "/signin.html"){let login = data.name; let pass = data.pass; console.log('User', login, 'Pass', pass);
        if((login === '') || (pass === ''))
        {
            rs.writeHead(400);
			rs.end('Login failed');
			return;
        }
        let users; let account_lines;
		try {users = fs.readFileSync(process.env.HOME + "/home/vila/Labs_SecWeb/lab01/users.txt", 'utf8'); account_lines = users.split(/\n/);} catch(err) {rs.writeHead(500);rs.end('Error');return;}
		let is_user_exists = false;
		let password_to_check = undefined;
		for (let account_line of account_lines){let account = account_line.split(';'); let account_name = account[0]; let account_pass = account[1];
			if(login === account_name){is_user_exists = true; password_to_check = account_pass; break;}}
		if(is_user_exists === false)
		{rs.writeHead(403); rs.end('User not found'); return;}
		if(data.pass === password_to_check)
		{rs.writeHead(200); rs.end('Success');=return;} else {rs.writeHead(403);rs.end('wrong password');return;}		
	}
});

server.listen(port, hostname, ()=>{
	console.log(`server running at http://${hostname}:${port}`);
})