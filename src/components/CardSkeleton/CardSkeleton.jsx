import React from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {Link} from "react-router-dom";


const CardSkeleton = ({cards}) => {
    return (
        Array(cards).fill(0).map((item) => (
            <div className="card">

                <div className="card__nav">
                    <Link>
                        <Skeleton width={185} height={220}/>
                    </Link>
                    <h3 className="card__title">
                        <Skeleton width={185} height={50}/>
                    </h3>
                    <p className="card__money">
                        <Skeleton width={185}/>
                    </p>
                </div>

            </div>
        ))

    );
};

export default CardSkeleton;