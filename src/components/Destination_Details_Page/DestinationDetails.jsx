import React from 'react';
import { useDestinationContext } from '../../store/DestinationContext.jsx';
import '../Inquiry_Form/DestinationInquiryForm.css';
import InquiryForm from '../Inquiry_Form/InquiryForm.jsx';
import './DestinationDetails.css';
import DestinationDetailsHeader from './DestinationDetailsHeader/DestinationDetailsHeader.jsx';
import DestinationDescription from './InnerArea/DestinationDescription.jsx';
import DestinationList from './InnerArea/DestinationList.jsx';

export default function DestinationDetails() {
    const { initialLoad } = useDestinationContext();

    return (
        <>
            <DestinationDetailsHeader />
            <section id="destinationDetailsPage">
                <div className="row inner-area">
                    <DestinationDescription />
                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 col-12 p-0 inner-box-1">
                        <InquiryForm />
                        {!initialLoad && <DestinationList />}
                    </div>
                </div>
            </section>
        </>
    );
}