import React from "react";
const BookmarkList = ({ bookmarks, deleteHandler }) => {
    return (<ul>
      {bookmarks.map((bookmark, index) => (<li key={index}>
          <a href={bookmark.url} target="_blank" rel="noopener noreferrer">{bookmark.title}</a>
          <button onClick={() => deleteHandler(index)}>Delete</button>
        </li>))}
    </ul>);
};
export default BookmarkList;
