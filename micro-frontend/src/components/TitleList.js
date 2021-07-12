import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchTitlesFromAPI } from '../actions/titles';
import { sendVoteToAPI } from '../actions/posts';
import "./TitleList.css";

const TitleList = () => {
    const titles = useSelector(state => state.titles);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    const vote = (id, direction) => {
        dispatch(sendVoteToAPI(id, direction));
    }

    useEffect(() => {
        const fetchTitles = async () => {
            await dispatch(fetchTitlesFromAPI());
            setIsLoading(false);
        }

        if (isLoading) {
            fetchTitles();
        }
    }, [dispatch, isLoading]);

    if (isLoading) return <b>Loading</b>;
    
    if (!isLoading && titles.length === 0) {
        return <b>Please add a post!</b>
    }

    return (
        <div className="row">
            {titles.map(title => (
                <div key={title.id} className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <Link to={`/${title.id}`}>{title.title}</Link>
                            </div>
                            <div className="card-text">
                                <i>{title.description}</i>
                            </div>
                        </div>
                        <div className="card-footer">
                            <small>{title.votes} votes</small>
                            <i className="fas fa-thumbs-up text-success m-1"
                                onClick={() => vote(title.id, "up")}
                            />
                            <i className="fas fa-thumbs-down text-danger m-1"
                                onClick={() => vote(title.id, "down")}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TitleList;