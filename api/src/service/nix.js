const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const loaderConfig = require('../config/proto');

const nixDef = protoLoader.loadSync(
  path.resolve(__dirname,'..','pb', 'nix.proto'),
  loaderConfig);

const nix = grpc.loadPackageDefinition(nixDef);

const nixClient = new nix.PurchaseService(
  'localhost:3335', 
  grpc.credentials.createInsecure()
);


module.exports = nixClient;