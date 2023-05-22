#ABOUT this bash script
#CHModed it like this: 	chmod +x run.sh
#execute it doing this: ./run.sh
#have phun!


#Stops the currently runing container, if there is one
echo "Running: docker stop brobath-www"
docker stop brobath-www

#Deletes the current "brobath-test" docker container
echo "Running: docker container rm brobath-www"
docker container rm brobath-www

#To build the docker image:
#NOTE: you must be in the Dockerfile directory with tour terminal
echo "Running: docker build -t brobath_www ."
docker build -t brobath_www .

#To run naming it but not on backgrount (to see the life's console.logs)
#docker run --name brobath-www --publish 5002:5002 brobath_www

#To run naming it and on background:
echo "Running: docker run --name brobath-www -d --publish 5002:5002 brobath_www"
docker run --name brobath-www -d --publish 5002:5002 brobath_www

#Prints the status of the running containers after deploying this one!
echo "Running: docker ps"
docker ps

#For accessing the running container, run the following code:
#docker exec -it <container_id> /bin/bash
