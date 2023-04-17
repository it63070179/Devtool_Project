# เลือก image ของ nginx
FROM nginx

# copy ไฟล์ index.html ไปยัง /usr/share/nginx/html/
COPY index.html /usr/share/nginx/html/

# copy ไฟล์ css ไปยัง /usr/share/nginx/html/css/
COPY css /usr/share/nginx/html/css/

# copy ไฟล์ img ไปยัง /usr/share/nginx/html/img/
COPY img /usr/share/nginx/html/img/

# copy ไฟล์ js ไปยัง /usr/share/nginx/html/js/
COPY js /usr/share/nginx/html/js/

# expose port 80
EXPOSE 80

# เปิด nginx ด้วย command "nginx -g daemon off;"
CMD ["nginx", "-g", "daemon off;"]
