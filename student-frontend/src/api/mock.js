import Mock from 'mockjs'
import { getData } from '.'

Mock.mock('/home/getData' , function () {
    console.log('lanjie')
})
 



