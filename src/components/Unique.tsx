import { FlexCenter, FlexStart } from "../styled-components/Flex.styles";
import { Banner, BannerImage, BannerInfo, DescriptionList, DotBlue, DotGreen, DotPink, ListItem, UniqueWrapper } from "./Unique.styles";
import { ButtonBig } from "./ui/Button.styles";

export default function Unique() {
  return (
    <UniqueWrapper>
      <Banner>
        <BannerImage>
          <img src="/unique-couch.png" alt="couch" />
        </BannerImage>
        <BannerInfo>
          <h3>
            Unique Features Of latest & Trending Poducts
          </h3>
          <DescriptionList>
            <li>
              <FlexStart>
                <DotPink />
                <ListItem>
                  All frames constructed with hardwood solids and laminates
                </ListItem>
              </FlexStart>
            </li>
            <li>
              <FlexStart>
                <DotBlue />
                <ListItem>
                  Reinforced with double wood dowels, glue, screw - nails corner
                </ListItem>
              </FlexStart>
            </li>
            <li>
              <FlexStart>
                <DotGreen />
                <ListItem>
                  Arms, backs and seats are structurally reinforced
                </ListItem>
              </FlexStart>
            </li>
          </DescriptionList>
          <FlexCenter>
            <ButtonBig>
              Add to cart
            </ButtonBig>
            <p>
              B&B Italian Sofa<br />$32.00
            </p>
          </FlexCenter>
        </BannerInfo>
      </Banner>
    </UniqueWrapper>
  )
}