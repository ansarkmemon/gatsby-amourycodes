---
id: "002"
index: 1
type: "notes"
title: 'Docker Notes'
---

# Docker Notes
`docker run hello-world`

![](https://paper-attachments.dropbox.com/s_1A757F4B106404C0520D55FBB2E64CD67E6E5B01F639FBAFD17BAA72187B49D8_1565584585521_Screen+Shot+2019-08-12+at+8.34.19+AM.png)

![](https://paper-attachments.dropbox.com/s_1A757F4B106404C0520D55FBB2E64CD67E6E5B01F639FBAFD17BAA72187B49D8_1565585704237_Screen+Shot+2019-08-12+at+8.54.44+AM.png)


### Removing Stopped Containers

`docker system prune`

- Delete all the stopped containers and reclaim space


Get logs from Container

`docker logs <container-id>`


### Stopping the Container

`docker stop <container-id>`

- This sends `SIGTERM` signal - which means we send a message to the process to terminate the signal. It means, we will let the process stop on its own and take its time to do any cleanups or save file etc.
- If the container does not shut down in 10s with this command, it will fallback to the `kill` command.

`docker kill <container-id>`

- This send `SIGKILL` signal - which means kill the process immediately and no need to do any clean ups.


### Execute commands inside the Container

`docker exec -it <container-id> <command>`


![](https://paper-attachments.dropbox.com/s_1A757F4B106404C0520D55FBB2E64CD67E6E5B01F639FBAFD17BAA72187B49D8_1565597230491_Screen+Shot+2019-08-12+at+12.06.47+PM.png)



- `-i` and `-t` are two seperate flags here but by convention we use the shorthand and write `-it`
- `-i` gives you access to the keyboard and enables you to interact with the container. 
- `-it` attach to stdIn of the container


### Getting the Command Prompt in the Container

`docker exec -it <container-id> sh`



### Assigning a name to your container / Image

`docker build -t stephengrider/redis:latest .`


### Use custom Dockerfile name

`docker build -f Dockerfile.dev .`



### Port Mapping
![](https://paper-attachments.dropbox.com/s_1A757F4B106404C0520D55FBB2E64CD67E6E5B01F639FBAFD17BAA72187B49D8_1565673820805_Screen+Shot+2019-08-13+at+9.23.15+AM.png)




### Setting up the volumes
![](https://paper-attachments.dropbox.com/s_1A757F4B106404C0520D55FBB2E64CD67E6E5B01F639FBAFD17BAA72187B49D8_1565687615305_Screen+Shot+2019-08-13+at+1.11.24+PM.png)


Reference 

Commands for Dockerfile (Build process)

- `FROM` - specify the base image
- `COPY` - copy files from hard drive to the container
- `RUN` - Run this command during the build process eg. `RUN npm install`
- `CMD` - Default command to start the container eg. `CMD [``"``node``"``,` `"``index.js``"``]`
- `WORKDIR` - Specify the Working Directly in the container filesystem



`docker-compose.yml`
    version: '3'
    services:
      redis-server:
        image: 'redis'
      node-app:
        build: .
        ports:
          - "3001:8081"
          
### Docker-compose restart policy

`no` - Never attempt to restart this container if it stops or crashes.
`always` - If this container stops for any reason always attempt to restart it.
`on-failure` - Only restart if the container stops with an error code.
`unless-stopped` - Always restart unless the developers forcibly stop it.

