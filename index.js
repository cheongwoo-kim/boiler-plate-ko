const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const { User } = require("./models/User");

const config = require('./config/key')
//클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게 함
//application/x-www-form-urlencoded
// express.json({extended: true})
app.use(bodyParser.urlencoded({extended:true}))
//json 타입 분석해서 가져옴
app.use(bodyParser.json())


const mongoose =  require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!!!!!!!!'))

app.post('/register', (req, res)=>{
  //회원 가입 할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터베이스에 넣어준다.

  //클라이언트에서 보내는 정보를 받아줌
  const user = new User(req.body)

  user.save((err,userInfo)=> {
    //에러가 있을 때 json 방식으로 전송실패 출력
    if(err) return res.json({success: false, err})
    //status(200) = 성공
    return res.status(200).json({
      success : true

    })
  })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}!`))