import index from "../index";

import { Suite } from "benchmark";

console.log("\nStarting benchmark...", index);

const suite = new Suite();
const value = {};
const none  = x => x;

suite
    .add("none", function() {
        none(value);
    })
    .on("cycle", function(event) {
        console.log(String(event.target));
    })
    .on("complete", function() {
        console.log("Benchmark done.");
    })
    .run({
        async: true
    });
