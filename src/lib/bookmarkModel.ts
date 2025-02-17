import mongoose from "mongoose";

const BookmarkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Bookmark = mongoose.models.Bookmark || mongoose.model("Bookmark", BookmarkSchema);
