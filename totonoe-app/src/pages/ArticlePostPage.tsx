import { useAuth0 } from '@auth0/auth0-react'
import React, { ChangeEventHandler, Component, Fragment, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Article } from '../@types/article/Article'
import { Input } from '../components/form-components/Input'
import { Textarea } from '../components/form-components/Textarea'

type Data = {
    article: Article,
    user_id: string|undefined,
}

export const ArticlePostPage = () => {
    const [article, setArticle] = useState<Article>({
        id: "",
        title: "",
        content: "",
    });
    const {getAccessTokenSilently, user} = useAuth0();
    //const accessToken = useAuth0Token();
    
    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setArticle({
            ...article,
            [name]: value,
        });
    }
    console.log(article)

    const handleSubmit = async(evt: any) => {
        evt.preventDefault();
        var err: Error|null = new Error
        
        err = CheckForm(article)
        if(!typeof(err)) {
            window.alert(err)
        }
        if(!user) {
            return
        }
       
        try {
            const uri = "http://localhost:4000/articles/new";
            const accessToken = await getAccessTokenSilently({
                audience: 'https://totonoe-app.com',
                scope: 'read:posts',
            })
            console.log(accessToken)
            const requestOption: RequestInit = {
            method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({article, 'user_id': user.sub?.split('|').at(1)})
            }
            console.log(requestOption)
            fetch(uri, requestOption)
            .then((response) => response.json())
            .then(data => {
                setArticle({
                    ...article,
                    id: data.ID,
                })
            })
        }
        catch(err) {
            console.log("エラー",err)
        }

    }
    return (
        <Fragment>
                <h2>ととのい日記を投稿する</h2>

                <hr />
                <label className="form-label">
                    タイトル
                </label>
                <form onSubmit={handleSubmit}>
                    <Input 
                        type="text"
                        className="input-sm"
                        name="title"
                        value={article.title}
                        onChange={handleChange}
                        errorDiv=""
                        errorMsg=""
                        />
                        <label className="form-label">
                            内容
                        </label>
                    <Textarea 
                        name="content"
                        rows={5}
                        value={article.content}
                        onChange={handleChange}
                    />
                    <hr />
                    <button className="btn btn-primary">Save</button>
                    <Link to="/" className="btn btn-warning ms-1">
                        Cancel
                    </Link>
                </form>
        </Fragment>
    )
}

function CheckForm(article: Article): Error|null {
    if(article.title === "") {
        return new Error("タイトルが未入力です")
    }
    if(article.content === "") {
        return new Error("内容が未入力です")
    }

    return null;
}
