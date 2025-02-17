"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var BookmarkList = function (_a) {
    var bookmarks = _a.bookmarks, deleteHandler = _a.deleteHandler;
    return (<ul>
      {bookmarks.map(function (bookmark, index) { return (<li key={index}>
          <a href={bookmark.url} target="_blank" rel="noopener noreferrer">{bookmark.title}</a>
          <button onClick={function () { return deleteHandler(index); }}>Delete</button>
        </li>); })}
    </ul>);
};
exports.default = BookmarkList;
