
[rewrite_local]
  
https://www\.gofish\.ren/v1/index/ticket-list url script-response-body https://raw.githubusercontent.com/hezongkun/testa/main/change-btn.js


[mitm] 

hostname=www.gofish.ren

var body = $response.body
body = JSON.parse(body)
console.log(body);
body['ticket_list'][0]['angling_name'] = 123
body = JSON.stringify(body)
$done(body)
