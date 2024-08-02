
[rewrite_local]
  
# > 
https?:\/\/gofish\.ren\/v1\/index\/ticket-list url script-response-body https://raw.githubusercontent.com/hezongkun/testa/main/change-btn.js


[mitm] 

hostname=www.gofish.ren

var body = $response.body
body = JSON.parse(body)
body.ticket_list[0].ticket_site_btn_type = 3
body = JSON.stringify(body)
$done({ body })
