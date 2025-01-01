import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useDispatch } from "react-redux";

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDsipatch = useDispatch.withTypes<AppDispatch>();