
/***********************************

> 应用名称：提前换位-显示按钮
> 软件版本：1.0.0

[rewrite_local]
  
# > 
https?:\/\/gofish\.ren\/v1\/index\/check-lock url script-response-body https://github.com/hezongkun/testa/blob/main/check-lock.js


[mitm] 

hostname=www.gofish.ren

***********************************/





# var body = $response.body
var test = {
  "lottery_type": "no_seize_seat",
  "time": 55000,
  "start_time": "2024-08-02 14:00:00",
  "is_lock": 1,
  "fishing_name": "08.02测试勿买",
  "fid": "31425",
  "error": "",
  "request_time": 50055,
  "desc": "（普通鱼票）正在放号"
}
var body = JSON.stringify(test)
$done({ body })
