import express, { Application } from 'express'
import { poems, IPoem } from './data';
import mysql from 'mysql'
import bodyParser from 'body-parser'

const app: Application = express();
const PORT: number = 8081

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'poem'
})
connection.connect()

app.get('/poem_list', (request, response) => {
    console.log("访问了");
    const sql = "select * from poemlist"
    let str = ''
    const flag = connection.query(sql, function (err, res) {
        if (err) {
            console.log('[SELECT ERROR]：', err.message);
            response.status(200).send({ data: "出错了" })
        }
        if (flag.typeCast) {
            str = res
            response.status(200).send({ data: str })
        } else {
            response.status(200).send({ data: "出错了" })

        }
    })

})
app.post('/add_poem', (request, response) => {
    console.log("增加");
    const request_data = request.body
    console.log(request_data.poet);
    const sql = `insert into poemlist(poet,content,article,type,dynasty) values ('${request_data.poet || ''}','${request_data.content || ''}','${request_data.article || ''}','${request_data.type || ''}','${request_data.dynasty || ''}');`
    const flag = connection.query(sql, function (err, res) {
        if (err) {
            console.log('[SELECT ERROR]：', err.message);
            response.status(200).send({ data: "出错了" })
        }
    })
    console.log(flag.typeCast);
    response.status(200).send({ data: "添加成功" })

})


app.listen(PORT, () => {
    console.log('server is running on ' + PORT);
})


