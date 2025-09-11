import { Body, LabelSmall } from "../styled-components/Typography.styles";
import { PenIcon, CalendarIcon } from "../icons/Icons";
import { Section } from "../styled-components/Section.styles";
import { BlogCard, BlogCardBody, BlogInfo, BlogTitle, BlogWrapper, ReadMoreButton } from "./Blog.styles";
import { BlogData } from "@/types/Blog";
import { useEffect, useState } from "react";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogData[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('/data/blog.json');
        const data = await response.json();
        setBlogPosts(data.latest);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };
    getProducts();
  }, []);
  return (
    <Section>
      <h2>Latest Blog Posts</h2>
      <BlogWrapper>
        {blogPosts && blogPosts.map((post, index) =>
          <BlogCard key={index}>
            <img src={post.thumbnail} alt={post.title} />
            <BlogCardBody>
              <BlogInfo>
                <div>
                  <PenIcon />
                  <LabelSmall>
                    {post.author}
                  </LabelSmall>
                </div>
                <div>
                  <CalendarIcon />
                  <LabelSmall>
                    {post.date}
                  </LabelSmall>
                </div>
              </BlogInfo>
              <BlogTitle className="blog-title">
                {post.title}
              </BlogTitle>
              <Body>
                {post.body}
              </Body>
              <ReadMoreButton>
                Read More
              </ReadMoreButton>
            </BlogCardBody>
          </BlogCard>
        )
        }
      </BlogWrapper>
    </Section>
  )
}