FROM nginx
COPY dist/ /usr/share/nginx/html/
COPY dist/js/ /usr/share/nginx/html/js/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
