# EmbarkJS-BlockChain


## Installation:

```sh
$ npm -g install embark

# If you plan to use the simulator instead of a real ethereum node.
$ npm -g install ethereumjs-testrpc
```


## Creating a new app:

```sh
$ embark new AppName
$ cd AppName
```

> App Structure

```sh
  app/
    |___ contracts/ #solidity or serpent contracts
    |___ html/
    |___ css/
    |___ js/
  config/
    |___ blockchain.json #rpc and blockchain configuration
    |___ contracts.json  #ethereum contracts configuration
    |___ storage.json  #ipfs configuration
    |___ communication.json  #whisper/orbit configuration
    |___ webserver.json  #dev webserver configuration
  test/
    |___ #contracts tests
```

> Run app:

```sh
$ embark run
```


## IPFS:

> init the repo

```sh
$ ipfs init
initializing ipfs node at /Users/jbenet/.go-ipfs
generating 2048-bit RSA keypair...done
peer identity: Qmcpo2iLBikrdf1d6QU6vXuNb6P7hwrbNPW9kLAH8eG67z
to get started, enter:

$ ipfs cat /ipfs/QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG/readme
```

```sh
$ ipfs cat /ipfs/QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG/readme
```

```sh
$ ipfs cat /ipfs/QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG/quick-start
```

> Going Online

```sh
$ ipfs daemon
```

> open

```sh
http://localhost:5001/webui
```

> IPFS CORS Settings 

```sh
$ ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["http://localhost:8000"]'
$ ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "GET", "POST"]'
$ ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials '["true"]'
```

```sh

```
