import React from "react";
import { useContext } from "react";
import Search from "../../assets/icon/search.png";
import { addressContext } from "../../context/context";
import Trash from "../../assets/trash.svg";
import Plus from "../../assets/plus.svg";
import { AiFillStar } from "react-icons/ai";
import CustomBanner from "../../assets/discountBanner.svg";

function Wishlist() {
  const { state, dispatch } = useContext(addressContext);
  const [select, setSelect] = React.useState(false);
  const [mode, setMode] = React.useState(false);
  const [wishFilter, setWishFilter] = React.useState([]);

  const [wishList, setWishList] = React.useState(state);

  React.useEffect(() => {
    setWishList(state);
  }, [state]);

  const handleCheck = (e) => {
    setSelect(!select);
    if (e.target.checked) {
      setWishFilter((prevState) => {
        return [...prevState, { id: e.target.name }];
      });
    } else {
      setWishFilter((prevState) => {
        return prevState.filter((x) => x.id !== e.target.name);
      });
    }
  };

  //Search Handler
  const searchHandler = (e) => {
    console.log(e.target.value);
    setWishList(state.filter((x) => x.name.toLowerCase().includes(e.target.value.toLowerCase())));
  };

  //Hapus checked wishlist
  const handleRemove = () => {
    dispatch({ type: "REMOVE_GROUP", payload: wishFilter });
    setWishFilter((prevState) => {
      return [...prevState, prevState.filter((x) => x.id !== wishFilter.id)];
    });
    setMode(false);
  };

  return (
    <div className="p-12">
      <div className="flex items-center justify-between">
        <div className="font-bold text-[1.25rem]">Wishlist</div>
        <div className="relative border-blue-pale border-[1px] p-3 rounded-md">
          <input onChange={(e) => searchHandler(e)} className="w-[30rem]" type="text" placeholder="Search wishlist" />
          <img className="absolute right-[5%] top-[50%] translate-y-[-50%]" src={Search} alt="" />
        </div>
        {mode ? (
          <div className="flex gap-5 items-center">
            <button onClick={() => setMode(false)}>Batal</button>
            <button onClick={() => handleRemove()}>
              Hapus {`(`}
              {wishFilter.length}
              {`)`}
            </button>
          </div>
        ) : (
          <div onClick={() => setMode(true)} className="cursor-pointer text-blue-pale">
            Atur Wishlist
          </div>
        )}
      </div>
      {state ? (
        <div className="w-full grid grid-cols-6 gap-12">
          {wishList.map((x) => {
            return (
              <div key={x.id} className="p-3 relative flex flex-col rounded-md border-[1px] border-light-blue-pale">
                {mode ? (
                  <>
                    <div style={{ background: "rgba(0,0,0,0.4)" }} className="w-full z-[2] h-full absolute top-0 left-0 right-0 bottom-0 "></div>
                    <input onClick={(e) => handleCheck(e)} name={x.id} className="absolute right-[5%] w-[1.25rem] h-[1.25rem] cursor-pointer top-[5%] z-[3]" type="checkbox" />
                  </>
                ) : (
                  ""
                )}
                {x.discount ? (
                  <div className="absolute right-[5%] top-0">
                    <img src={CustomBanner} alt="" />
                    <div style={{ transform: "translate(-50%,-50%)" }} className="text-[0.85rem] text-white absolute top-[50%] left-[50%]">
                      {x.discount}%
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <img src={x.productImages[0].image} alt="" />
                <div>{x.name}</div>
                <div className={`${x.discount ? "before-2 text-[#B5B5B5]" : ""} mt-auto`}>Rp {x.price}</div>
                {x.discount ? <div className="font-bold text-[1.25rem]">Rp {x.price - (x.price * x.discount) / 100}</div> : ""}
                <div className="flex gap-[10px] items-center">
                  <div className="flex items-center gap-[5px]">
                    <AiFillStar className="text-[#FBC646]" />
                    {x.ratingAverage}
                  </div>
                  <div>|</div>
                  <div className="text-[0.85rem]">Terjual {x.amountSold}</div>
                </div>
                <div className="flex gap-5 mt-4 justify-between">
                  <img className="cursor-pointer" onClick={() => dispatch({ type: "REMOVE_FROM_WISHLIST", payload: x })} src={Trash} alt="" />
                  <button className="flex gap-1 items-center justify-center px-5 p-2 bg-[#FBC646]">
                    <img src={Plus} alt="" />
                    <div>Keranjang</div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Wishlist Kosong .... </div>
      )}
    </div>
  );
}

export default Wishlist;
