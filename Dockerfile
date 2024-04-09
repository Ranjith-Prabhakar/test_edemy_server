FROM ubuntu as build

RUN apt-get update
RUN apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - 
RUN apt-get upgrade -y 
RUN  apt-get install -y nodejs 
RUN npm install -g typescript

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY .env .
RUN npm install 
COPY src .

RUN   npx tsc -p .

RUN apt-get install -y nginx

RUN npm i pm2 -g
RUN pm2 startup ubuntu

RUN ufw enable
RUN ufw status
RUN ufw allow ssh (Port 22)
RUN ufw allow http (Port 80)
RUN ufw allow https (Port 443)
RUN rm /etc/nginx/sites-available/default.conf
COPY default.conf /etc/nginx/sites-available/

RUN add-apt-repository ppa:certbot/certbot
RUN apt-get update
RUN apt-get install python3-certbot-nginx
RUN certbot --nginx -d digi-world.online -d www.digi-world.online


# -------------------------------------stage 2
FROM node as runner

RUN service nginx startup
WORKDIR /app

COPY --from=build /app .

RUN pm2 start dist/index



# CMD ["npm", "run", "server"]





# FROM ubuntu as build

# RUN apt-get update
# RUN apt-get install -y curl
# RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - 
# RUN apt-get upgrade -y 
# RUN  apt-get install -y nodejs 
# RUN npm install -g typescript

# WORKDIR /app

# COPY package.json .
# COPY package-lock.json .
# COPY tsconfig.json .
# COPY .env .
# RUN npm install 
# COPY src .

# RUN   npx tsc -p .

# FROM node as runner

# WORKDIR /app

# COPY --from=build /app .

# CMD ["npm", "run", "server"]

