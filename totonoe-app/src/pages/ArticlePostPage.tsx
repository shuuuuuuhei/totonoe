import { useAuth0 } from '@auth0/auth0-react'
import React, { ChangeEventHandler, Component, Fragment, useState } from 'react'
import { Alert, Form, Button } from 'react-bootstrap'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Article } from '../@types/article/Article'
import { Input } from '../components/form-components/Input'
import { Textarea } from '../components/form-components/Textarea'
import { NewArticle } from '../@types/article/NewArticle'
import { useCookies } from "react-cookie";
import { IsNullOrUndefinedOrEmpty } from '../common/Check'
import { UndefinedConvertToZero, UndefinedOrNullConvertToEmpty } from '../common/Convert'
import { toast } from 'react-toastify'

type Data = {
    article: Article,
    user_id: string|undefined,
}

const baseUri = "http://localhost:4000/"


/**
 * サウナ施設 IDをリンクから受け取って施設情報と記事情報を紐づける処理を行う(紐付け処理は未着手)
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

    const [facilityName, setFacilityName] = useState(getFacilityName(facilityID));
    const [article, setArticle] = useState<NewArticle>({
        ID: "",
        Title: "",
        Content: "",
        UserID: "",
        SaunaID: "",
    });
    const {getAccessTokenSilently} = useAuth0();
    const [cookies, setCookie,removeCookie] = useCookies();
    
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
                body: JSON.stringify({article, 'user_id': cookies.userID, "facility_id": parseInt(UndefinedOrNullConvertToEmpty(facilityID)),})
            }
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

    return (
        <Fragment>
                <h2>ととのい日記を投稿する</h2>

                <hr />
                <div className="facility">
                    <label htmlFor="">施設名：</label>
                    <h3>{facilityName}</h3>
                </div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="form-title">
                        <Form.Label htmlFor="">タイトル</Form.Label>
                        <Form.Control 
                                type="text"
                                className="input-sm"
                                name="Title"
                                value={article.Title}
                                onChange={handleChange}
                                placeholder="タイトルを入力"
                                required={true}
                        />
                    </Form.Group>
                    <Form.Group className="form-content">
                        <Form.Label htmlFor="">内容</Form.Label>
                        <Form.Control 
                                type="textarea"
                                className="input-sm"
                                name="Content"
                                value={article.Content}
                                onChange={handleChange}
                                placeholder="内容を入力"
                                required={true}
                        />
                    </Form.Group>
                    <hr />
                    <Button type="submit" className="btn btn-primary">Save</Button>
                    <Link to="/" className="btn btn-warning ms-1">
                        Cancel
                    </Link>
                </Form>
        </Fragment>
    )
}