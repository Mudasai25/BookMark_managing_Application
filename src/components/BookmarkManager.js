"use client";
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var BookmarkList_1 = __importDefault(require("./BookmarkList"));
var BookmarkManager = function () {
    var _a = (0, react_1.useState)(""), title = _a[0], setTitle = _a[1];
    var _b = (0, react_1.useState)(""), url = _b[0], setUrl = _b[1];
    var _c = (0, react_1.useState)([]), bookmarks = _c[0], setBookmarks = _c[1];
    var _d = (0, react_1.useState)(false), useAPI = _d[0], setUseAPI = _d[1]; // Toggle for API or local storage
    (0, react_1.useEffect)(function () {
        if (useAPI) {
            fetch("/api/bookmarks")
                .then(function (res) { return res.json(); })
                .then(function (data) { return setBookmarks(data.data); });
        }
        else {
            var savedBookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
            setBookmarks(savedBookmarks);
        }
    }, [useAPI]);
    (0, react_1.useEffect)(function () {
        if (!useAPI) {
            localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        }
    }, [bookmarks, useAPI]);
    var submitHandler = function (e) {
        e.preventDefault();
        if (title.trim() === "" || url.trim() === "")
            return;
        var newBookmark = { title: title, url: url };
        if (bookmarks.some(function (bookmark) { return bookmark.url === url; }))
            return; // Avoid duplicates
        setBookmarks(__spreadArray(__spreadArray([], bookmarks, true), [newBookmark], false));
        setTitle("");
        setUrl("");
    };
    var deleteHandler = function (index) {
        setBookmarks(bookmarks.filter(function (_, i) { return i !== index; }));
    };
    return (<div className="p-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 min-h-screen">
      <h2 className="text-4xl font-extrabold text-white text-center mb-8 animate-bounce"> Bookmark Manager </h2>

      {/* Toggle for API / Local Storage */}
      {!useAPI && (
        <form onSubmit={submitHandler} className="flex flex-col gap-4 mb-8 p-6 bg-black bg-opacity-50 rounded-3xl shadow-2xl">
          <input
            type="text"
            placeholder="Website Name"
            value={title}
            onChange={function (e) { return setTitle(e.target.value); }}
            required
            className="border-2 border-pink-400 text-xl text-white p-4 rounded-lg bg-black bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-pink-600 transition-all duration-300"
          />
          <input
            type="url"
            placeholder="Website URL"
            value={url}
            onChange={function (e) { return setUrl(e.target.value); }}
            required
            className="border-2 border-blue-400 text-xl text-white p-4 rounded-lg bg-black bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 via-blue-500 to-indigo-500 text-2xl text-white py-3 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            Add Bookmark
          </button>
        </form>
      )}

      <BookmarkList_1.default bookmarks={bookmarks} deleteHandler={deleteHandler} />
    </div>);
};
exports.default = BookmarkManager;
