import index from "../../index";
import { expect } from "chai";

describe("reduce-prototypeTest-unit", function() {
    it("uses reduce-prototype", function() {
        expect(index).to.be.an.instanceOf(Object);
    });
});
