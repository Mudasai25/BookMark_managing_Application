"use client";
import { useState, useEffect } from "react";
import BookmarkList from "./BookmarkList";
const BookmarkManager = () => {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [bookmarks, setBookmarks] = useState([]);
    const [useAPI, setUseAPI] = useState(false); // Toggle for API or local storage
    useEffect(() => {
        if (useAPI) {
            fetch("/api/bookmarks")
                .then((res) => res.json())
                .then((data) => setBookmarks(data.data));
        }
        else {
            const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
            setBookmarks(savedBookmarks);
        }
    }, [useAPI]);
    useEffect(() => {
        if (!useAPI) {
            localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        }
    }, [bookmarks, useAPI]);
    const submitHandler = (e) => {
        e.preventDefault();
        if (title.trim() === "" || url.trim() === "")
            return;
        const newBookmark = { title, url };
        if (bookmarks.some((bookmark) => bookmark.url === url))
            return; // Avoid duplicates
        setBookmarks([...bookmarks, newBookmark]);
        setTitle("");
        setUrl("");
    };
    const deleteHandler = (index) => {
        setBookmarks(bookmarks.filter((_, i) => i !== index));
    };
    return (<div className="p-4">
      <h2 className="text-xl font-bold mb-4">Bookmark Manager</h2>

      {/* Toggle for API / Local Storage */}
      <label className="flex items-center gap-2 mb-4">
        <input type="checkbox" checked={useAPI} onChange={() => setUseAPI(!useAPI)}/>
        Fetch from API instead of local storage
      </label>

      {!useAPI && (<form onSubmit={submitHandler} className="flex flex-col gap-2 mb-4">
          <input type="text" placeholder="Website Name" value={title} onChange={(e) => setTitle(e.target.value)} required className="border p-2 rounded"/>
          <input type="url" placeholder="Website URL" value={url} onChange={(e) => setUrl(e.target.value)} required className="border p-2 rounded"/>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Add Bookmark
          </button>
        </form>)}

      <BookmarkList bookmarks={bookmarks} deleteHandler={deleteHandler}/>
    </div>);
};
export default BookmarkManager;
