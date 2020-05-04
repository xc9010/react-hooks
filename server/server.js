const express = require('express');
const Mock = require('mockjs');

const app = express()

const Random = Mock.Random

// 设置请求头
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Content-Type', 'application/json;charset=utf-8');
    next()
})

app.get('/posts', (reg, res) => {
    let num = 100
    let posts = []
    for(let i=0; i< num; i++){
        posts.push(Mock.mock({
            id: '',
            title: Random.cparagraph(1, 6),
            content: Random.cparagraph(2, 5),
            time: Random.datetime('yyyy-MM-dd hh:mm:ss'),
            author: Random.cname(),
            'like|1-1000': 1,
        }))
    }
    res.json(posts)
})

app.listen(3001, () => {
    console.log('Server port: 3001')
})