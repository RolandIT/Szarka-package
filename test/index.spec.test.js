const assert = require("assert");
const src = require("../src/index.js");
describe("Ahoj", function() {
    it("Ahoj test", function() {
        let t = function(){
            return "Ahoj";
        }
        assert("Ahoj",src.a());
    });
    it("Ahoj test 2", function() {
        let t = function(){
            return "Ahoj";
        }
        assert.strictEqual("Ahoj",src.a("nieco"));
    });
});


