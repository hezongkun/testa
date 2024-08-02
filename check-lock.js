[rewrite_local]
  
https?:\/\/www\.gofish\.ren\/v1\/index\/check-lock url script-response-body https://raw.githubusercontent.com/hezongkun/testa/main/check-lock.js

[mitm] 

hostname=www.gofish.ren






var test = {
  "lottery_type": "no_seize_seat",
  "time": 55000,
  "start_time": "2024-08-02 15:58:00",
  "is_lock": 1,
  "fishing_name": "08.02测试勿买",
  "fid": "31425",
  "error": "",
  "request_time": 50055,
  "desc": "（普通鱼票）正在放号"
}
var body = JSON.stringify(test)
$done({ body })
