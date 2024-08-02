/***********************************
[rewrite_local]
^https://www\.gofish\.ren/v1/index/ticket-list url script-response-body https://raw.githubusercontent.com/hezongkun/testa/main/change-btn.js
 
[mitm] 
hostname=www.gofish.ren
***********************************/


var body = $response.body
body = JSON.parse(body)
body.ticket_list[0].angling_name = '测试123'
body.ticket_list[0].ticket_site_btn_str = '换位'
body.ticket_list[0].ticket_site_btn_type = 3
body.ticket_list[0].position_status = 2
body.ticket_list[0].status = 3
body = JSON.stringify(body)
console.log(body);
$done(body)
