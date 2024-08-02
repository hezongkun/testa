
[rewrite_local]
  
# > 
https?:\/\/www\.gofish\.ren\/v1\/index\/ticket-list url script-response-body https://raw.githubusercontent.com/hezongkun/testa/main/change-btn.js


[mitm] 

hostname=www.gofish.ren


var body = $response.body.replace(/志洋百川台钓/g, 'test')
$done({ body })
