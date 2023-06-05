import React from 'react'
import { useTranslation } from "react-i18next";

const LoadMoreBtn = ({result, page, load, handleLoadMore}) => {
    const { t } = useTranslation();
    return (
        <>
            {
                result < 9 * (page - 1) ? '' : 

                !load && <button className="btn btn-dark mx-auto d-block"
                onClick={handleLoadMore}>
                    {t('Loadmore')}
                </button>
            }
            
        </>
    )
}

export default LoadMoreBtn
