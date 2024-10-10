'use client';

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className="mt-16 prompt_layout">
            {
                data.map((post) => (
                    <PromptCard
                        key={post._id}
                        post={post}
                        handleTagClick={handleTagClick}
                    />
                ))
            }
        </div>
    );
};

const Feed = () => {
    const [searchText, setSearchText] = useState('');
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);

    const handleSearchChange = (e) => {
        const text = e.target.value;
        setSearchText(text);

        // Filter posts based on search text (by email, username, prompt, or tag)
        const filtered = posts.filter(post =>
            post.creator.email.toLowerCase().includes(text.toLowerCase()) ||
            post.creator.username.toLowerCase().includes(text.toLowerCase()) ||
            post.prompt.toLowerCase().includes(text.toLowerCase()) ||
            post.tag.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredPosts(filtered);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/prompt');
            const data = await response.json();
            setPosts(data);
            setFilteredPosts(data); // Initially show all posts
        };
        fetchPosts();
    }, []);

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input 
                    type="text"
                    placeholder="Search for Prompts, tag, or username"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="search_input peer"
                />
            </form>

            {/* Pass the filtered posts to the PromptCardList */}
            <PromptCardList
                data={filteredPosts}
                handleTagClick={() => {}}
            />
        </section>
    );
};

export default Feed;
