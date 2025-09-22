import { StarEmptyIcon, StarIcon } from "../icons/ProductsPageIcons";
import { RatingWrapper } from "../components/Filters.styles";

export const renderRating = (rating: number) => (
  <RatingWrapper>
    {[...Array(5)].map((_, i) =>
      i < rating ? <StarIcon key={i} /> : <StarEmptyIcon key={i} />
    )}
  </RatingWrapper>
);
