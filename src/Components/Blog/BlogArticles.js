import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import { IoArrowForwardOutline } from 'react-icons/io5'


const BlogArticles = () => {

    const data = useStaticQuery(graphql`
        query {
            allPosts: allHashNodePost(sort: {fields: dateAdded, order: DESC}) {
                edges {
                    node {
                        coverImage
                        title
                        brief
                        dateAdded
                    }
                }
            }
        }

    `)

    const allPosts = data.allPosts.edges.map(({node}) => node)

    return (
        <div>
            <div className="">
                <h1 className="text-white text-2xl font-bold mb-2">Blog Articles</h1>
                <div className="flex flex-col md:grid md:grid-cols-3">
                    { allPosts.map( (post) => (
                        <section className="flex flex-col bg-mirage-400 rounded-lg shadow md:h-80 h-72 w-72 m-auto my-4">
                            <img
                                className="w-full h-40 md:h-48 object-cover object-center rounded-t-lg"
                                src={post.coverImage}
                                alt="blogImage"
                            />
                            <div className="flex-grow m-auto text-white text-center mx-2">
                                <div>
                                    <h1 className="text-lg font-semibold "> {post.title} </h1>
                                    {/* <p className="text-md mT-2"> { post.brief.substring(0, 60).concat(`...`) } </p> */}
                                    <p className="text-xs"> { new Date(post.dateAdded).toDateString() } </p>
                                </div>
                            </div>
                            <div className="m-auto my-2">
                                <a href="/blog"> 
                                    <div className="font-semibold flex flex-row text-white"> 
                                        <h3>
                                            Read more 
                                        </h3>
                                        <span className="text-xl mt-1 mx-2"> 
                                            <IoArrowForwardOutline/> 
                                        </span>  
                                    </div> 
                                </a>
                            </div>
                        </section>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default BlogArticles
