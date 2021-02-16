"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var epsg_number_1 = require("../src/epsg_number");
test('some EPSG constants', function () {
    expect(epsg_number_1.EpsgNumber.WORLD__WGS_84__4326).toEqual(4326);
    expect(epsg_number_1.EpsgNumber.SWEDEN__SWEREF99_TM__3006).toEqual(3006);
    expect(epsg_number_1.EpsgNumber.SWEDEN__12_00__SWEREF99_12_00__3007).toEqual(3007);
});
