import { useMutation, useQueryClient } from "react-query";
import { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { addWish, deleteWish, wish } from "../../apis/wish";

const WishButton = ({ filter, id, initialIsWished, onWishChange }) => {
  const [isWished, setIsWished] = useState(initialIsWished);
  const queryClient = useQueryClient();

  const addMutation = useMutation(() => addWish(id), {
    onSuccess: () => {
      setIsWished(true);
      if (onWishChange) onWishChange(true);
      queryClient.refetchQueries("wishlist");
    },
  });

  const deleteMutation = useMutation(() => deleteWish(id), {
    onSuccess: () => {
      setIsWished(false);
      if (onWishChange) onWishChange(false);
      queryClient.refetchQueries("wishlist");
    },
  });

  useEffect(() => {
    // console.log(isWished);
  }, [isWished]);

  const handleWishButtonClick = (event) => {
    event.stopPropagation();
    if (isWished) {
      deleteMutation.mutate();
    } else {
      addMutation.mutate();
    }
  };

  return (
    <button onClick={handleWishButtonClick} aria-label="wish-button" className={"z-20"}>
      <AiFillHeart
        size={30}
        color={isWished ? "#f93E00" : "#e4e5e9"}
        style={{ display: "inline-block", fontSize: "16px" }}
      />
    </button>
  );
};

export default WishButton;
