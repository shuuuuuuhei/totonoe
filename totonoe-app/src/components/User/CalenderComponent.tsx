import React, { Component, Fragment } from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import styled from '@emotion/styled'
import { Article } from '../../@types/article/Article';

/**
 * カレンダー用CSS定義
 */
const StyleWrapper = styled.div`
    .fc .fc-toolbar.fc-header-toolbar {
        margin-bottom: 0;
    }
    .fc .fc-toolbar-title {
        font-size: 1rem;
        color: #37362f;
    }
    .fc .fc-button-primary {
        font-size: 0.75rem;
        background-color: #ffffff00;
        color: #acaba9;
        border: none;
        outline: none;
    }
    .fc .fc-today-button {
        background-color: #ffffff00;
        color: #37362f;
        border: none;
        outline: none;
    }
    .fc .fc-button-primary:not(:disabled):active,
    .fc .fc-button-primary:not(:disabled).fc-button-active {
        background-color: #ffffff00;
        color: #acaba9;
        box-shadow: none;
    }
    .fc .fc-button-primary:not(:disabled):focus,
    .fc .fc-button-primary:not(:disabled).fc-button-focus {
        background-color: #ffffff00;
        color: #acaba9;
        box-shadow: none;
    }
    .fc .fc-today-button:disabled {
        opacity: 1;
    }
    `

type CalenderComponentProps = {
    articles: Article[] | undefined;
}
type Event = {
    title: string,
    start: string,
}
export const CalenderComponent: React.VFC<CalenderComponentProps> = (props) => {

    const articleDateList = props.articles.map(article => {
        console.log(article);
        return ({ title: article.facility_name, start: article.admission_date })
    })

    return (
        <Fragment>
            <div className="calendar py-5">
                <StyleWrapper>
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        locales={[jaLocale]}
                        locale='ja'
                        height="auto"
                    // events={props.articles.map((article) => {
                    //     return (
                    //         {
                    //             title: article?.facility_name,
                    //             start: article?.admission_date,
                    //         }
                    //     )
                    // })}
                    />
                </StyleWrapper>

            </div>
        </Fragment>
    )
}