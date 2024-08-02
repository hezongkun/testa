/***********************************
[rewrite_local]
^https://www\.gofish\.ren/v1/index/check-lock url script-response-body https://raw.githubusercontent.com/hezongkun/testa/main/check-lock.js
 
[mitm] 
hostname=www.gofish.ren
***********************************/


var body = $response.body
body = JSON.parse(body)
if(body.time){
  body.time = body.time - 5000
  if(body.time<5000){
    body.time = 0
  }
  $notify('倒计时减10s')
}
var body = JSON.stringify(body)
$done(body)
