import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreaters } from "../model";

export const useActions = () => {
    const dispatch = useDispatch(); 

   return bindActionCreators(actionCreaters, dispatch)
}; 