"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var routes_1 = __importDefault(require("./routes")); // Import routes
dotenv_1.default.config(); // Load environment variables
var app = (0, express_1.default)();
var PORT = process.env.PORT || 5000;
// Middleware
app.use(express_1.default.json()); // JSON Parser
app.use((0, cors_1.default)()); // Handle CORS
// Routes
app.use("/api", routes_1.default); // All API routes will be prefixed with /api
// Start Server
app.listen(PORT, function () {
    console.log("\uD83D\uDE80 Server running on http://localhost:".concat(PORT));
});
