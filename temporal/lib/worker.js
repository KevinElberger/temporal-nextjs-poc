"use strict";
// import { Worker } from '@temporalio/worker';
// import * as activities from './activities';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// run().catch((err) => console.log(err));
// async function run() {
//   const worker = await Worker.create({
//     workflowsPath: require.resolve('./workflows'),
//     activities,
//     taskQueue: 'hello-world',
//   });
//   // Start accepting tasks on the `tutorial` queue
//   await worker.run();
// }
const worker_1 = require("@temporalio/worker");
const activities = __importStar(require("./activities"));
async function run() {
    // Step 1: Register Workflows and Activities with the Worker and connect to
    // the Temporal server.
    const worker = await worker_1.Worker.create({
        workflowsPath: require.resolve('./workflows'),
        activities,
        taskQueue: 'hello-world',
    });
    // Worker connects to localhost by default and uses console.error for logging.
    // Customize the Worker by passing more options to create():
    // https://typescript.temporal.io/api/classes/worker.Worker
    // If you need to configure server connection parameters, see docs:
    // https://docs.temporal.io/typescript/security#encryption-in-transit-with-mtls
    // Step 2: Start accepting tasks on the `hello-world` queue
    await worker.run();
}
run().catch((err) => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=worker.js.map