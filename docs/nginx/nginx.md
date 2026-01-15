# nginx部署项目

- 本地部署

  - 打包构建项目，生成dist文件夹

  - 进入nginx文件夹中的conf文件夹，找到nginx.conf文件

  - ```cmd
    server {
            listen       8099;			//更改端口地址
            server_name  localhost;
    
            #charset koi8-r;
    
            #access_log  logs/host.access.log  main;
    
            location / {
                root   D:\soft_self\dist;		//更改为dist文件夹的路径
                index  index.html index.htm;
    	    try_files $uri $uri/ /index.html;	//路由刷新
            }
    
            #error_page  404              /404.html;
    
            # redirect server error pages to the static page /50x.html
            #
            error_page   500 502 503 504  /50x.html;
            location = /50x.html {
                root   html;
            }
    
            # proxy the PHP scripts to Apache listening on 127.0.0.1:80
            #
            #location ~ \.php$ {
            #    proxy_pass   http://127.0.0.1;
            #}
    
            # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
            #
            #location ~ \.php$ {
            #    root           html;
            #    fastcgi_pass   127.0.0.1:9000;
            #    fastcgi_index  index.php;
            #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
            #    include        fastcgi_params;
            #}
    
            # deny access to .htaccess files, if Apache's document root
            # concurs with nginx's one
            #
            #location ~ /\.ht {
            #    deny  all;
            #}
        }
    
    ```

  - 多个项目就添加多个server，端口不冲突就行

  - 每修改该文件后，都要重启nginx服务

