import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
// import { useDispatch, useSelector } from "react-redux";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
// import {
//   selectOrdersSearchText,
//   setOrdersSearchText,
// } from "../store/ordersSlice";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Heading from "../../UI/Heading";
import DefaultTabs from "../../UI/DefaultTabs";

function SuggestionHeader(props) {
  // const dispatch = useDispatch();
  // const searchText = useSelector(selectOrdersSearchText);
  const dataTabs = [{"tabsStatus":-1,"tabName":"Novi predlozi","tabValue":1},{"tabsStatus":0,"tabName":"Reseni predlozi","tabValue":2}]
  return (
    <>
      <div className="flex flex-col w-full">
        <Heading title="Predlozi" />
        <DefaultTabs tabs={dataTabs} />
      </div>
    </>
  );
}

export default SuggestionHeader;
