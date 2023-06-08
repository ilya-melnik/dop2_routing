import React from 'react';
import {PagesType} from "../../dataState/dataState";
import {useParams} from "react-router-dom";



type PageType = {
    pages: PagesType[]
}
export const Page = (props: PageType) => {
    const params = useParams()
    return (
        <div>

            {props.pages[Number(params.id)].about}
        </div>
    );
};

