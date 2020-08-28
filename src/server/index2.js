const React = require('react');

const { renderToString } = require('react-dom/server');

const http = require('http');

// import Index from './test.js';

//组件
class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    handlerClick(){
       alert('一起来玩 react ssr 啊');
    }

    render() {
        return <h1 onClick={this.handlerClick}>click here!</h1>
    }
}

//服务
http.createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        const html = renderToString(<Index/>);
    res.end(`<!DOCTYPE html>
		<html lang="en">
		<head>
		    <meta charset="UTF-8">
		    <title>React SSR</title>
		</head>
		<body>
		    <div id="root">
		       ${html}
		    </div>
		</body>
		</html>`);
    }
).listen(9001);

console.log('server start. 9001');