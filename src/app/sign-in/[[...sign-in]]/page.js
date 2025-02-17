"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Page;
var nextjs_1 = require("@clerk/nextjs");

function Page() {
    return (
        <div style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            background: 'linear-gradient(135deg, #ff007f, #9b4dff, #00b5e2)', 
            backgroundSize: 'cover', 
            animation: 'gradientAnimation 10s ease infinite'
        }}>
            <div style={{
                padding: '40px',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                borderRadius: '20px',
                boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.5)',
                transform: 'scale(1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
            }} className="hover:scale-105 hover:shadow-2xl animate-bounce">
                <nextjs_1.SignIn routing="hash" forceRedirectUrl="/dashboard" />
            </div>
        </div>
    );
}

export default Page;

