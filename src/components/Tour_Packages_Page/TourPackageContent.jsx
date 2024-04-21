import { Link } from 'react-router-dom';
import { usePackageContext } from '../../store/PackagesContext';
import { currencyFormatter } from '../../util/formatting';
import './TourPackage.css';

export default function TourPackageContent({packages}) {
    const { setExcludedName } = usePackageContext();

    const handleReadMoreClick = () => {
        setExcludedName(packages.title);
    };

    return (
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12">
            <Link to={`../package/${packages.id}`} onClick={handleReadMoreClick}>
                <div className="inner-box" id="adventour">
                    <div className="inner-image-overlay">
                        <img src={packages.image} alt='Tour Package' />
                        <div className="inner-overlay">
                            
                        </div>
                    </div>
                    <div className="caption-1">{packages.title}</div>
                    <div className="caption-2">
                        <i className="fas fa-map-marker-alt" id="map"></i> {packages.location}
                    </div>
                    <div className="para">
                        {packages.details}
                    </div>
                    <div className="timeprice">
                        <div className="time">{packages.duration}</div>
                        <div className="price">
                            {currencyFormatter.format(packages.price)}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}