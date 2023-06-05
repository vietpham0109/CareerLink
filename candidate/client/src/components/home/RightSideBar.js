import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import UserCard from '../UserCard'
import FollowBtn from '../FollowBtn'
import LoadIcon from '../../images/loading.gif'
import { getSuggestions } from '../../redux/actions/suggestionsAction'
import { useTranslation } from "react-i18next";

const RightSideBar = () => {
    const { t } = useTranslation();
    const { auth, suggestions } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className="mt-3">
            

            <div className="d-flex justify-content-between align-items-center my-2">
                <h5 className="text-danger">{t('Suggestionsforyou')}</h5>
                {
                    !suggestions.loading &&
                    <i className="fas fa-redo" style={{cursor: 'pointer'}}
                    onClick={ () => dispatch(getSuggestions(auth.token)) } />
                }
            </div>

            {
                suggestions.loading
                ? <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
                : <div className="suggestions">
                    {
                        suggestions.users.map(user => (
                            <UserCard key={user._id} user={user} >
                                <FollowBtn user={user} />
                            </UserCard>
                        ))
                    }
                </div>
            }
            <div style={{opacity: 0.5}} className="my-2" >             
                <small className="d-block">
                    {t('WelcometoCVLibrary')}
                </small>

                <small>
                   &copy; 2023 JobFeed Viet Pham 
                </small>
            </div>

        </div>
    )
}

export default RightSideBar
