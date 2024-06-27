import { useState, useEffect } from "react";
import { SteppedLineTo } from "react-lineto";

type CurrencyProps = {
  currency: string;
  amount: number;
  chosen: string;
  setChosen: any;
  screenSize: any;
};

export default function Currency(props: CurrencyProps) {
  //methond that hits BE, passing currency and amount
  const [amountSupplied, setAmountSupplied] = useState(false);

  useEffect(() => {
    if (props.amount > 0) {
      setAmountSupplied(true);
    } else {
      setAmountSupplied(false);
    }
  }, [props.amount]);

  console.log(props.screenSize);

  return (
    <div>
      <button
        className={`${props.currency} select-none cursor-pointer text-[#818181] plasmo-text-xl flex justify-center px-4 py-4 bg-[#38393c] rounded-lg`}
        type="button"
        onClick={() => {
          console.log(props.amount);
          if (amountSupplied && props.chosen !== props.currency) {
            props.setChosen(props.currency);
          } else {
            props.setChosen("");
          }
        }}
      >
        {props.currency}
      </button>

      <SteppedLineTo
        borderColor={`${!amountSupplied && props.currency === props.chosen ? "white" : "#818181"} `}
        from="fromValue"
        fromAnchor={`${props.screenSize < 1024 ? "bottom" : "right"}`}
        to={props.currency}
        toAnchor={`${props.screenSize < 1024 ? "top" : "left"}`}
        delay={100}
        zIndex={amountSupplied && props.chosen === props.currency ? 100 : 1}
        orientation={`${props.screenSize < 1024 ? "v" : "h"}`}
        borderWidth={amountSupplied && props.chosen === props.currency ? 2 : 1}
      />
      <SteppedLineTo
        borderColor={`${!amountSupplied && props.currency === props.chosen ? "white" : "#818181"} `}
        from={props.currency}
        fromAnchor={`${props.screenSize < 1024 ? "bottom" : "right"}`}
        to="toValue"
        toAnchor={`${props.screenSize < 1024 ? "top" : "left"}`}
        delay={100}
        zIndex={amountSupplied && props.chosen === props.currency ? 100 : 1}
        orientation={`${props.screenSize < 1024 ? "v" : "h"}`}
        borderWidth={amountSupplied && props.chosen === props.currency ? 2 : 1}
      />
    </div>
  );
}
