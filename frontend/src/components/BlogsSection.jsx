import React from "react";

const BlogsSection = ({blogs, loading}) =>
{
    return (
        
        <section id="blog" style={{padding:"60px 20px 0px 20px"}} className="container mt-5" >
  <h2 className="text-center text-white w-100 headings">Blogs</h2>

  {loading ? (
    <div
              style={{ width: "100%", textAlign: "center", margin: "40px 0" }}
            >
              <img
                src="./public/load.gif"
                alt="Loading..."
                style={{ width: "250px", height: "250px" }}
              />
            </div>
  ) : blogs.length > 0 ? (
    blogs.map((blog) => (
      <div key={blog._id} className="card shadow p-4 mb-4 blogsCard" style={{backgroundColor:"#222831cb"}}>
        <h4 style={{color:"#f8f9fa"}}>💬 {blog.title}</h4>
        <p
        style={{
           color:"#b0b3b8"
        }}>
          <em>{blog.snippet}</em>
        </p>

        <details>
          <summary
            className="text-primary"
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            Click to Read More
          </summary>
          <div
            className="mt-3"
            style={{color: "#d1d5db"}}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </details>
      </div>
    ))
  ) : (
    <p className="text-center">No blogs available yet.</p>
  )}
</section>
    );
}

export default BlogsSection;