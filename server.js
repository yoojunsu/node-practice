/** express 라이브러리 사용 **/
const express = require('express');
const app = express();
/** ..express 라이브러리 사용 **/

/** public 폴더 공통사용 **/
app.use(express.static(`${__dirname}/public`));
/** ...public 폴더 공통사용 **/

/** mongodb 라이브러리 사용목적 세팅 **/
const { MongoClient } = require('mongodb')
let db
const url = 'mongodb+srv://admin:wnstn123456@yjs.gpcpgdn.mongodb.net/?retryWrites=true&w=majority'
new MongoClient(url).connect().then((client)=>{
    console.log('DB연결성공');
    db = client.db('forum');
    app.listen(8080, () => {
        console.log('http://localhost:8080 에서 서버 실행 중');
    });
}).catch((err)=>{
    console.log(err);
});
/** mongodb 라이브러리 사용목적 세팅 **/

app.get('/',(post, res) => {
    //index.html 파일 send
    res.sendFile(`${__dirname}/index.html`);
});

app.get('/about',(post,res) => {
    //about.html 파일 send
    res.sendFile(`${__dirname}/about.html`);
});

app.get('/news',(post, res) => {
    // '/news'경로 입장시 mongodb 저장 테스트 코드
    db.collection('post').insertOne({title: 'DB 테스트용 타이틀'})
});
