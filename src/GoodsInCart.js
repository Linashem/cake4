import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeGoodsReducerActions } from "./store/cartGoodsReducer";
import { cartDecrementAction } from "./store/cartReducer";

export const GoodsInCart = () => {
  const goods = useSelector((state) => state.goodsInCart.goodsInCart);
  const dispatch = useDispatch();
  const removeGoodInCart = (item) => {
    console.log(item);
    dispatch(removeGoodsReducerActions(item));
  };
  const deliteGood = () => {
    dispatch(cartDecrementAction());
  };
  return (
    <>
      <div>
        {goods.length > 0 ? (
          goods.map((noel) => (
            <>
              <div>{noel.id}</div>
              <h3>{noel.title}</h3>
              <div onClick={deliteGood}>
                <button onClick={() => removeGoodInCart(noel.id)}>x</button>
              </div>
            </>
          ))
        ) : (
          <h1>sorry</h1>
        )}
      </div>
    </>
  );
};
