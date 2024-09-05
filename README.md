# HelloWorld-MicroServices
## Author : Nevil Padariya
### SJSU ID : 0177555369


## Technologies used in this Application
> 1. Node.js with Express.js
> 2. Minikube
> 3. Docker


## How to Run Applications individually

### 1. Hello Application
> 1. Move into directory hello-service/
> 2. open CMD and run following command "node hello.js"
> 3. Application will be live on localhost and port number 3000 "http://localhost:3000/hello"

### 1. World Application
> 1. Move into directory world-service/
> 2. open CMD and run following command "node world.js"
> 3. Application will be live on localhost and port number 3001 "http://localhost:3001/world"


### Docker Images Built Using this Applications
> * Hello application docker image
>   * nevil163/hello-service 

> * World application docker image
>   * nevil163/world-serice
 

> 1. To run and pull Hello application using docker image, run following commands
>    1. "docker pull nevil163/hello-service"
>    2. "docker run -p 3000:3000 nevil163/hello-service"
>    3. open "http://localhost:3000/hello"
 

> 2. To pull World docker image,run following command
>    * "docker pull nevil163/world-service"
>    * "docker run -p 3001:3001 nevil163/world-service"
>    * open "http://localhost:3001/world"


## Running mircroservices on Kubernetes Cluster using minikube

> 1. open CMD and run following command
>    * minikube start

> 2. run "minikube addons enable ingress"

> 3. Deployment objects
>    * Go into /kubernetes directory
>       * run "kubectl apply -f hello-service-deployment.yaml"
>       * run "kubectl apply -f world-service-deployment.yaml"

> 4. Serivce Objects
>    * run "kubectl apply -f hello-service.yaml"
>    * run "kubectl apply -f world-service.yaml"

> 5. Run ingress service command
>    * run "kubectl apply -f ingress-service.yaml"

> 6. Check everthing is running smoothly
>    * kubectl get all

> 7. Run minikube tunnel
>   * run "minikube tunnel"

> 8. Both service will be running on kubernetes cluster and accessible at
>    * http://localhost/hello
>    * http://localhost/world

> 9. Go to the project directory
>    * run "npm test"

