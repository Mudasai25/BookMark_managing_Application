var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Bookmark } from "@/lib/bookmarkModel";
// Connect to MongoDB
connectDB();
// **GET All Bookmarks**
export function GET() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bookmarks = yield Bookmark.find();
            return NextResponse.json({ success: true, data: bookmarks });
        }
        catch (error) {
            return NextResponse.json({ success: false, message: "Error fetching bookmarks" }, { status: 500 });
        }
    });
}
// **POST Create a New Bookmark**
export function POST(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { title, url, category } = yield req.json();
            const newBookmark = new Bookmark({ title, url, category });
            yield newBookmark.save();
            return NextResponse.json({ success: true, data: newBookmark });
        }
        catch (error) {
            return NextResponse.json({ success: false, message: "Error adding bookmark" }, { status: 500 });
        }
    });
}
