// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

import { expect } from "@open-wc/testing";
import { ChildItemService } from "../src/child-service.js";

describe("ChildItemService getItemByNumber", () => {
  it("gets an item by its 1-based number", () => {
    const service = new ChildItemService();
    const first = {};
    const second = {};
    service.addMany([first, second]);

    expect(service.getItemByNumber(1)).to.equal(first);
    expect(service.getItemByNumber(2)).to.equal(second);
  });

  it("throws for 0, which isn't a valid 1-based number", () => {
    const service = new ChildItemService();
    service.add({});

    expect(() => service.getItemByNumber(0)).to.throw("Number must be a valid index");
  });

  it("throws for a number above the item count", () => {
    const service = new ChildItemService();
    service.add({});

    expect(() => service.getItemByNumber(2)).to.throw("Number must be a valid index");
  });

  it("throws when there are no items", () => {
    const service = new ChildItemService();

    expect(() => service.getItemByNumber(1)).to.throw("Number must be a valid index");
  });
});
