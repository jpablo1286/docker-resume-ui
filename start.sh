sudo docker build -t juanrivera-resume:latest ./
sudo docker run --rm --name ang-cli -p 4200:4200 -v "$(pwd)"/src/:/app/my-project/src juanrivera-resume:latest
