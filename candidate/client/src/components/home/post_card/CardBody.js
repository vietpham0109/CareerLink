import React, { useState } from 'react'
import Carousel from '../../Carousel'
import { useTranslation } from "react-i18next";

const CardBody = ({post, theme}) => {
    const [readMore, setReadMore] = useState(false)
    const { t } = useTranslation();
    
    return (
        <div className="card_body">
            <div className="card_body-content" 
            style={{
                filter: theme ? 'invert(1)' : 'invert(0)',
                color: theme ? 'white' : '#111',
            }}>
                <span>
                    {
                        post.content.length < 500 
                        ? post.content 
                        : readMore ? post.content + ' ' : post.content.slice(0, 500) + '.....'
                    }
                </span>
                {
                    post.content.length > 500 &&
                    <span className="readMore" onClick={() => setReadMore(!readMore)}>
                        {readMore ? t('Hidecontent') : t('Readmore')}
                    </span>
                }

            </div>
            {
                post.images.length > 0 && <Carousel images={post.images} id={post._id} />
            }
        </div>
    )
}

export default CardBody
