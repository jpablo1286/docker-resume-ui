if [ "$1" == "dev" ];
then
  cp Dockerfile-dev Dockerfile
  sudo docker build -t juanrivera-resume:latest ./
  sudo docker run --rm --name juanrivera-resume -p 4200:4200 -v "$(pwd)"/src/:/app/my-project/src juanrivera-resume:latest
else
  cp Dockerfile-prod Dockerfile
  sudo docker build -t juanrivera-resume:latest ./
  sudo docker run --rm --name juanrivera-resume -p 4200:4200 juanrivera-resume:latest
fi
