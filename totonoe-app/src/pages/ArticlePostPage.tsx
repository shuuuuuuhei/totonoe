import { useAuth0 } from '@auth0/auth0-react'
import React, { Component, Fragment, useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Article } from '../@types/article/Article'

import { NewArticle } from '../@types/article/NewArticle'
import { useCookies } from "react-cookie";
import { IsNullOrUndefinedOrEmpty } from '../common/Check'
import { UndefinedConvertToZero, UndefinedOrNullConvertToEmpty } from '../common/Convert'
import { toast } from 'react-toastify'
import DatePicker, { registerLocale } from "react-datepicker";
import ja from 'date-fns/locale/ja';
import "react-datepicker/dist/react-datepicker.css";
import { RatingScore, RatingOptionProps } from '../@types/article/Rating'
import { defaultScore, precisionScore, ratingList } from '../utils/constants'
import { Rating } from '@mui/material';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

type Data = {
    article: Article,
    user_id: string|undefined,
}

const baseUri = "http://localhost:4000/"


const labels: { [index: string]: string } = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const getLabelText = (value: number) => {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

/**
 * サウナ施設 IDをリンクから受け取って施設情報と記事情報を紐づける処理を行う
 */
export const ArticlePostPage = () => {
    const {facilityID} = useParams();
    const navigate = useNavigate();
    
    /**
     * @param id facilityID
     * facilityIDから施設名を取得する
     */
    const getFacilityName = (id: string | undefined) => {

        if(IsNullOrUndefinedOrEmpty(id)) {
            return "";
        }

        const fetchGetFacilityName = async() => {
            const uri = baseUri + `facility/${id}/facilityName`;
            const requestOption: RequestInit = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }

            await fetch(uri, requestOption)
                .then((response) => {
                    if(!response.ok) {
                        throw new Error(response.status + "施設名の取得に失敗しました。")
                    }
                    return response.json();
                })
                .then((facility: Facility) => {
                    setFacilityName(facility.name)
                })
            .catch(err => {
                console.log(err)
            });
        }

        fetchGetFacilityName();
    }

    const [facilityName, setFacilityName] = useState<string>();
    const [article, setArticle] = useState<NewArticle>({
        ID: "",
        Content: ``,
        UserID: "",
        SaunaID: "",
    });

    const {getAccessTokenSilently} = useAuth0();
    const [cookies, setCookie,removeCookie] = useCookies();
    const [rating, setRatingScore] = useState<RatingScore>({
        totonoi_score: defaultScore,
        relax_score: defaultScore,
        price_score: defaultScore,
        ambience_score: defaultScore,
        service_score: defaultScore,
    });

    useEffect(() => {
        // 施設名を取得する
        getFacilityName(facilityID);
    }, [])
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setArticle({
            ...article,
            [name]: value,
        });
        console.log(article)
    }

    const handleSubmit = async(evt: any) => {
        evt.preventDefault();

        if(!cookies.userID) return
        
        // facilityIDが空文字もしくはUndefinedなら処理終了
        if(IsNullOrUndefinedOrEmpty(facilityID)) return
       
        console.log(facilityID)
        try {
            const uri = baseUri + "articles/new";
            const accessToken = await getAccessTokenSilently({
                audience: 'https://totonoe-app.com',
                scope: 'read:posts',
            })
            const requestOption: RequestInit = {
            method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({article, 'user_id': cookies.userID, "facility_id": parseInt(UndefinedOrNullConvertToEmpty(facilityID)), "rating": rating})
            }
            console.log(requestOption)
            fetch(uri, requestOption)
                .then((response) => response.json())
                .then(data => {
                    toast.success('ととのい日記を投稿しました！');
                    navigate(`/articles/${data.id}`);
                })
        }
        catch(error) {
            console.log("エラー",error)
        }
    }
    const [startDate, setStartDate] = useState(new Date());
    registerLocale('ja', ja);

    const RatingForm: React.VFC<RatingOptionProps> = (ratingOptionProps) => {

        const handleScore = (newScore: number | null) => {
            setRatingScore({
                ...rating, [ratingOptionProps.id]: newScore,
            })
            setRatingScore({
                ...rating, [ratingOptionProps.id]: newScore,
            })
        }

        return(
            <>
                <Rating
                    className="col-1"
                    value={rating[ratingOptionProps.id]}
                    defaultValue={defaultScore}
                    precision={precisionScore}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {handleScore(newValue)}}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {rating[ratingOptionProps.id] !== null && (
                    <Box className="col-2 py-1" sx={{ ml: 2 }}>{rating[ratingOptionProps.id]}</Box>
                )}
        </>
        )
    }

    console.log(article)

    return (
        <Fragment>
            <div className="container p-5 text-center">
                <div className="facility py-4">
                    <h1>{facilityName}</h1>
                </div>
                <div className="row visited-date text-start py-4">
                    <div className="col-1">訪問日</div>
                    <div className="col-1">
                        <DatePicker 
                            selected={startDate}
                            onChange={(date:Date) => setStartDate(date)}
                            dateFormat="yyyy/MM/dd"
                            locale='ja'
                        />
                    </div>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="form-content">
                        <Form.Control 
                                as="textarea"
                                className="input-sm"
                                name="Content"
                                value={article.Content}
                                onChange={handleChange}
                                placeholder="ととのいを"
                                required={true}
                                rows={10}
                        />
                    </Form.Group>
                    <div className="text-start">
                        {ratingList.map((rating, index) => {
                            return(
                                <div className="row py-3">
                                    <div className="col-2">
                                        <p>{rating.name}</p>
                                    </div>
                                    <RatingForm id={rating.id}/>
                                </div>
                            )
                        })}
                    </div>
                    <hr />
                    <Button type="submit" className="btn btn-primary">投稿</Button>
                    <Link to="/" className="btn btn-warning ms-1">
                        Cancel
                    </Link>
                </Form>
            </div>
        </Fragment>
    )
}