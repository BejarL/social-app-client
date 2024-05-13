import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAsyncFn } from "../hooks/useAsync";
import { createPost } from "../services/posts";

export function CreatePost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const { loading, error, execute: createPostFn } = useAsyncFn(createPost);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        createPostFn({ title, body }).then(() => navigate("/"));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Body</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? "Loading..." : "Create Post"}
            </button>
            {error && <div className="error-msg">{error}</div>}
        </form>
    );
}
