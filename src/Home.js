import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'xxx1', author: 'mario', id: 1},
        { title: 'Welcome friend', body: 'xxx1', author: 'mario', id: 2},
        { title: 'Welcome to the party', body: 'xxx1', author: 'mario', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
    }, []);

    return (
        <div className="home">
            <BlogList blogs={blogs} title='All blogs!' handleDelete={handleDelete} />
        </div>
    );
}
 
export default Home;