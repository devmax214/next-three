import { FeedbackListItem } from "../FeedbackListItem";

type Props = {};

export default function FeedbackListView(props: Props) {
  return (
    <>
      <FeedbackListItem hasReview />

      <FeedbackListItem />
    </>
  );
}
