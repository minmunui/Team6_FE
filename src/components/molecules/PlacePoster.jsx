import { Link } from "react-router-dom";
import CardTitle from "../atoms/CardTitle";
import Photo from "../atoms/Photo";

const PlacePoster = ({ image, name, address, to, alt }) => {
  return (
    <Link
      to={to}
      className="place-card flex flex-shrink-0 flex-col gap-1 p-2 md:w-[15rem] shadow-rounded-card"
    >
      <div
        className={
          "image-wrapper w-full overflow-hidden rounded-lg md:h-[15rem] min-h-[11rem]"
        }
      >
          <Photo
            src={image}
            alt={alt}
            className={"h-full w-full object-cover"}
          />
      </div>
      <div className={"place-card-info"}>
        <CardTitle title={name} lineClamp={2}/>
        <div className="place-card-address line-clamp-2 w-full">{address}</div>
      </div>
    </Link>
  );
};

export default PlacePoster;
