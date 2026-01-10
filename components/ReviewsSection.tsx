import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import HeadingComponent from "./HeadingComponent";
import { reviews } from "@/constants/data";

export function ReviewsSection() {
  return (
    <div className="min-h-screen max-w-screen flex flex-col gap-12 items-center pt-28 overflow-hidden">
      <HeadingComponent
        heading="What Our Clients Say"
        variant="secondary"
      />
      <InfiniteMovingCards
        items={reviews}
        direction="left"
        speed="slow"
      />
    </div>
  );
}
