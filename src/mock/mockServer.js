import Mock from 'mockjs'
import HomeData from './shouye_data.json'
import TopicData from './cateList.json'
import NavData from './fenlei_zhuanqu.json'

Mock.mock('/homedata', {
  code: 0,
  data: HomeData
})
Mock.mock('/topicdata', {
  code: 0,
  data: TopicData
})
Mock.mock('/navdata', {
  code: 0,
  data: NavData.categoryL1List
})
