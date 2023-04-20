import React from 'react'
import BenefitCard from './BenefitCard'
import { Container } from '@mui/system'
import BenefitHeader from './BenefitHeader'
import BenefitHeaderOpen from './BenefitHeaderOpen';
import CompaniesBenefit from './CompaniesBenefit';
import BenefitGroupDivider from './BenefitGroupDivider';
import { Box } from '@mui/material';
import BenefitCompanyCard from './BenefitCompanyCard';
import BenefitClose from './BenefitClose';
import BenefitOpen from './BenefitOpen';
// import { useSelector } from 'react-redux';




function Benefit() {
    // const check = useSelector((state) => state.benefit.check);

    return (
        <>
        {/* {!check && <BenefitClose />} */}
        <BenefitOpen />
        {/* {check && <BenefitOpen />} */}
        </>

    )
}

export default Benefit
