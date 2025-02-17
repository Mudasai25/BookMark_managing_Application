import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Bookmark } from "@/lib/bookmarkModel";

// Connect to MongoDB
connectDB();

// **GET All Bookmarks**
export async function GET() {
  try {
    const bookmarks = await Bookmark.find();
    return NextResponse.json({ success: true, data: bookmarks });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error fetching bookmarks" }, { status: 500 });
  }
}

// **POST Create a New Bookmark**
export async function POST(req: NextRequest) {
  try {
    const { title, url, category } = await req.json();
    const newBookmark = new Bookmark({ title, url, category });
    await newBookmark.save();
    return NextResponse.json({ success: true, data: newBookmark });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error adding bookmark" }, { status: 500 });
  }
}
