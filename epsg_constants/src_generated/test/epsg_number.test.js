"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var epsg_number_1 = __importDefault(require("../src/epsg_number"));
test('some EPSG constants', function () {
    expect(epsg_number_1.default.WORLD__WGS_84__4326).toEqual(4326);
    expect(epsg_number_1.default.SWEDEN__SWEREF99_TM__3006).toEqual(3006);
    expect(epsg_number_1.default.SWEDEN__12_00__SWEREF99_12_00__3007).toEqual(3007);
});
