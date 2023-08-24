const shapes = require("../shapes.js");

describe("shapes", () => {
  describe("Circle", () => {
    it("determine if traingle can be rendered", () => {
      const shape = new shapes.Circle("Circle", "blue", "ABC", "green");
      expect(shape.render()).toEqual(
        '`<circle cx="200" cy="130" r="80" style="fill:blue;stroke:purple;stroke-width:1" />`'
      );
    });
  });
});
