"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nextjs_1 = require("@clerk/nextjs");
var DashboardLayout = function (_a) {
    var children = _a.children;
    return (<div>
      <div className='flex justify-center my-3'>
        <nextjs_1.UserButton />
      </div>
      {children}
    </div>);
};
exports.default = DashboardLayout;
