import index from "../../index";
import { expect } from "chai";

describe("reduce-prototypeTest-e2e", function() {
    it("uses reduce-prototype", function() {
        expect(index).to.be.an.instanceOf(Object);
    });
});
