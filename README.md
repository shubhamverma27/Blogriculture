# Blogriculture
Webapp and Mobile app For Crop Sale using Blockchain (Ethereum)

## Usage

To initialize a project with this run the following commands :-
(First Install Truffle and NPM)

1. npm install -g webpack 

2. Extract folder in nodemodules.zip to same directory / 

3. run testrpc on a new tab	To run server on localhost:8545

4. truffle migrate         	To migrate the code to server running on 8545 port

5. npm run dev     			To Run our server at localhost:8080

## Using the Front End

1. Open localhost:8080

2. Buy Tokens

3. Use these Tokens to buy crops from farmers.

4. Farmer Would be Paid from Escrow Once both the side of the deal are done.

## Common Errors

* **Error: Can't resolve '../build/contracts/xxx.json'**

This means you haven't compiled or migrated your contracts yet. Run `truffle compile` and `truffle migrate` first.

Full error:

```
ERROR in ./app/main.js
Module not found: Error: Can't resolve '../build/contracts/MetaCoin.json' in '/Users/tim/Documents/workspace/Consensys/test3/app'
 @ ./app/main.js 11:16-59
```
