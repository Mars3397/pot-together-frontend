import "./WrittenRecord.css";
import Dialog from "components/CommonComponents/Dialog";

// Example usage
/*
import Pork from "assets/ingredients/ingredient-4.svg";
const image =
    "https://s3-alpha-sig.figma.com/img/043a/1e07/56de716e35e03678c7725623ca088518?Expires=1704672000&Signature=fusbYi1xBnsHyb622fR5IBd75MxBYMNttduxQI90S61fR8~fuBSxVHJLkCFtNjwBklZNiJRI8kWcyAnNtXBEtTvPGMtTFv0NhhJyEzAZhb14cO5KbYrbbjA-z0McMy6t~Pe5Gd7oBJtnLmdWNgt-v6YPH7yG-bZjqYTiXlaWEAsD-PjOgAT8M6LU5HPw4V2StknOKloQcmxfz~RRgHbsRoTuxHIdi7tR~I2X0xvU5tNyQUu~QIHGszVCzA9lFQXZ88RRkQA688DNRG0fl8UobRR67DUksMlgRupeWRPAsjLBK5SjqdjEZiWHrGkmn4cYki-d-uFRcjXnqNLdsN1EIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
const date = new Date(2023, 11, 23, 0, 0);
const interval = 112321;
const caption = "Read two books and wrote my reflections!";
const ingredientImg = Pork;

<WrittenRecord
  image={image}
  date={date}
  interval={interval}
  caption={caption}
  ingredientImg={ingredientImg}
/>
*/
interface WrittenRecordProps {
  open: boolean;
  handleOnClose: () => void;
  date: Date;
  interval: number;
  image: string;
  caption: string;
  ingredientImg: string;
}

export const WrittenRecord = (props: WrittenRecordProps) => {
  const { open, handleOnClose, date, interval, image, caption, ingredientImg } =
    props;

  const formatTime = (value: number) => {
    const second = value % 60;
    const hour = Math.floor(value / 3600);
    const minute = Math.floor((value % 3600) / 60);

    return `${hour}:${minute}:${second}`;
  };

  return (
    <Dialog open={open} handleClose={handleOnClose}>
      <div className="written-record">
        <div className="written-record-title">
          <div className="written-record-date">
            {`${date.getMonth() + 1}/${date.getDate()}`}
          </div>
          <div className="written-record-interval">{formatTime(interval)}</div>
        </div>
        <div className="written-record-content">
          <img className="written-record-image" src={image} alt="" />
          <div className="written-record-caption">{caption}</div>
        </div>

        <div className="written-record-ingredient-image">
          <img src={ingredientImg} alt="" />
        </div>
      </div>
    </Dialog>
  );
};

export default WrittenRecord;
