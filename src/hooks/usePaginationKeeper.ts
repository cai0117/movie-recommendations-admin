import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setCurrent, setInput, setSize, setUrl } from "@/slices/keeperSlice";
import React, { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const usePaginationKeeper = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const url = useAppSelector((state) => state.keeper.url);
  const keeperCurrent = useAppSelector((state) => state.keeper.current);
  const keeperSize = useAppSelector((state) => state.keeper.size);
  const keeperInput = useAppSelector((state) => state.keeper.input);

  const current = React.useRef<number>(url === pathname ? keeperCurrent : 1);
  const size = React.useRef<number>(url === pathname ? keeperSize : 10);
  const input = React.useRef<object>(url === pathname ? keeperInput : {});

  useLayoutEffect(() => {
    return () => {
      dispatch(setUrl(pathname));
      dispatch(setCurrent(current.current));
      dispatch(setSize(size.current));
      dispatch(setInput(input.current));
    };
  }, []);

  return {
    current: current,
    size: size,
    input: input,
  };
};

export default usePaginationKeeper;
