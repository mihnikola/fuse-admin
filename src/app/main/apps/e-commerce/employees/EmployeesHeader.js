import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectOrdersSearchText, setOrdersSearchText } from './../store/ordersSlice';
import { Button } from '@mui/material';
// Jimport { Link } from "react-router-dom";
import EmployeesPreHeader from './EmployeesPreHeader';
import EmployeesPostHeader from './EmployeesPostHeader';
import EmployeesPreTwoHeader from './EmployeesPreTwoHeader';

function EmployeesHeader(props) {
  const dispatch = useDispatch();
  const searchText = useSelector(selectOrdersSearchText);

  return (
    <>
      <div className="flex flex-col w-full">
        <EmployeesPreHeader />
        <EmployeesPreTwoHeader />
        <EmployeesPostHeader />
      </div>
    </>
  );
}

export default EmployeesHeader;
