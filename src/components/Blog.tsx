import { Body, LabelSmall } from "../styled-components/Typography.styles";
import { PenIcon, CalendarIcon } from "../icons/Icons";
import { Section } from "../styled-components/Section.styles";
import { BlogCard, BlogCardBody, BlogInfo, BlogTitle, BlogWrapper, ReadMoreButton } from "./Blog.styles";

export default function Blog() {
  return (
    <Section>
      <h2>Latest Blog Posts</h2>
      <BlogWrapper>
        <BlogCard>
          <img src={'/blog/9e7e909c6de3d358d2ea968a5624e707d8c55157.jpg'} alt={'alt'} />
          <BlogCardBody>
            <BlogInfo>
              <div>
                <PenIcon />
                <LabelSmall>
                  Jhon Doe
                </LabelSmall>
              </div>
              <div>
                <CalendarIcon />
                <LabelSmall>
                  21 August, 2023
                </LabelSmall>
              </div>
            </BlogInfo>
            <BlogTitle>
              Top essential Trends in 2023
            </BlogTitle>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit hendrerit ex.
            </Body>
            <ReadMoreButton>
              Read More
            </ReadMoreButton>
          </BlogCardBody>
        </BlogCard>
        <BlogCard>
          <img src={'/blog/62870a73cbbe0be3bb081d3dd4e072cd840872d6.jpg'} alt={'alt'} />
          <BlogCardBody>
            <BlogInfo>
              <div>
                <PenIcon />
                <LabelSmall>
                  Jhon Doe
                </LabelSmall>
              </div>
              <div>
                <CalendarIcon />
                <LabelSmall>
                  21 August, 2023
                </LabelSmall>
              </div>
            </BlogInfo>
            <BlogTitle>
              Top essential Trends in 2021
            </BlogTitle>
            <Body>
              Nullam nec fringilla erat, ac dapibus nunc. Integer semper ipsum in fermentum aliquam.
            </Body>
            <ReadMoreButton>
              Read More
            </ReadMoreButton>
          </BlogCardBody>
        </BlogCard>
        <BlogCard>
          <img src={'/blog/e3c4499d9a11a4d1f9f95293b7180830d656c096.jpg'} alt={'alt'} />
          <BlogCardBody>
            <BlogInfo>
              <div>
                <PenIcon />
                <LabelSmall>
                  Jhon Doe
                </LabelSmall>
              </div>
              <div>
                <CalendarIcon />
                <LabelSmall>
                  21 August, 2023
                </LabelSmall>
              </div>
            </BlogInfo>
            <BlogTitle>
              Top essential Trends in 2023
            </BlogTitle>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit hendrerit ex.
            </Body>
            <ReadMoreButton>
              Read More
            </ReadMoreButton>
          </BlogCardBody>
        </BlogCard>
      </BlogWrapper>
    </Section>
  )
}