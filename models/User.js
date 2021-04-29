//몽구스 요청
const mongoose = require('mongoose')

//스키마 생성
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: {
        type: String
    },
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})
// 모델은 스키마를 감싸줌
const User = mongoose.model('User', userSchema)

//다른 곳에서도 사용하도록  
module.exports = {User}