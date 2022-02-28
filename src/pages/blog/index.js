import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from '../../components';

const Blog = ( {data} ) => {
  return (
    <Layout pageTitle='My Blog Posts'>
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <Link to={`/blog/${node.slug}`}>
                            <h2>{node.frontmatter.title}</h2>
                        </Link>
                        <p>Posted: {node.frontmatter.date}</p>
                    </article>
                    )
                )
            }
    </Layout>
  )
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    date(formatString: "D MMMM, YYYY")
                    title
                }
                id
                slug
            }
        }
    }
    
  `

export default Blog