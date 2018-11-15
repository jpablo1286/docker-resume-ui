UI-DOCKER
docker build -t ui:latest ./
docker run --rm --net=host --name ang-cli ui:latest
