"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapbox_gl_1 = __importDefault(require("mapbox-gl"));
mapbox_gl_1.default.accessToken = process.env.MAPBOX_ACCESS_TOKEN;
exports.default = (_ctx, inject) => {
    inject('mapbox', mapbox_gl_1.default);
};
