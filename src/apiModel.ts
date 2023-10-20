export interface Pay {
  id: number
  amount: number
  status: number
  pay_at: Date
  user_id: string
  trade_id: string
}

export interface Msg {
  id: number
  send_at: Date
  user_id: string
  content: string
}

export interface User {
  id: number
  amount: number
  create_at: Date
  user_id: string
  username: string
  count: number
  pays: Pay[]
  msgs: Msg[]
}

// {
//   "admin_password": "admin",
//   "provide_desc": "\n项目名称：\n项目介绍：\n价格：\n联系人：\n频道：【选填/没频道可以不填】\n",
//   "require_desc": "\n需求：\n预算：\n联系人：\n频道：【选填/没频道可以不填】\n",
//   "send_content": "\n【用户内容】\n\n该用户累计发布 【发表次数】 次，当前时间：【当前时间】\n",
//   "channel_ids": "-1001858197255,",
//   "usdt_token": "TTV9EnFgcZ8WXvE3YPqwz4VYoQzzLLLLLL",
//   "description": "\n发布规则 付费广告 消耗 【每次消耗的USDT】 USDT\n\n发布付费广告严格要求如下\n1：行数限制15行内【超过百分百不通过】\n2：禁止发布虚假内容，禁止诈骗欺骗用户🚫\n3：无需备注累计广告次数，机器人会自动统计\n\n请编写好广告词，点击下方【📝自助发布】\n\n供给频道： https://t.me/gcccaasas\n",
//   "once_cost": 2,
//   "ban_words": "做爱,死,数学,地理,生物,幼女,黄颖宝,蔡徐坤,陈立农,鸡巴",
//   "multiple": 1
// }

export interface Config {
  admin_password: string
  provide_desc: string
  require_desc: string
  send_content: string
  channel_ids: string
  usdt_token: string
  description: string
  once_cost: number
  pic_once_cost: number
  ban_words: string
  multiple: number
}
