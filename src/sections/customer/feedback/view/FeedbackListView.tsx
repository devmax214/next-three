import { FeedbackListItem } from "../FeedbackListItem";

type Props = {};

export default function FeedbackListView({ productList, rateHash }: Props) {
  const itemCustom = function (item) {
    if (rateHash[item._id]) {
      rateHash[item._id].rateId = rateHash[item._id]._id;
    }
    
    return rateHash[item._id] 
        ? <FeedbackListItem hasReview product={{...item, ...rateHash[item._id]}}/>
        : <FeedbackListItem product={item}/>
  }
  return (
    <>
      {productList.map(item => itemCustom(item))}
    </>
  );
}
