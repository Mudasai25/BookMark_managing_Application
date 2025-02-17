"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookmark = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var BookmarkSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    category: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
exports.Bookmark = mongoose_1.default.models.Bookmark || mongoose_1.default.model("Bookmark", BookmarkSchema);
