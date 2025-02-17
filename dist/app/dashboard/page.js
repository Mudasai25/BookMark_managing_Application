"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nextjs_1 = require("@clerk/nextjs");
var BookmarkManager_1 = __importDefault(require("../../components/BookmarkManager"));
var Dashboard = function () {
    var user = (0, nextjs_1.useUser)().user;
    return (<div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user === null || user === void 0 ? void 0 : user.fullName}!</h1>

      {/* Bookmark Manager Component */}
     <BookmarkManager_1.default />

      {/* Logout Button */}
      <nextjs_1.SignOutButton>
        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Logout
        </button>
      </nextjs_1.SignOutButton>
    </div>);
};
exports.default = Dashboard;
