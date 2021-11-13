import React from 'react';
import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const testArticle = {
    id: 'aMqwd', //unique article id
    headline: "headline", //title of article
    createdOn: '2021-08-09T18:02:38-04:00', //timestamp of when article was added
    summary: "summary", //short summary statement of article
    body: "text",  //paragraph of article text
    author: "author"
}

const testArticle2 = {
    id: 'aMqwd', //unique article id
    headline: "headline", //title of article
    createdOn: '2021-08-09T18:02:38-04:00', //timestamp of when article was added
    summary: "summary", //short summary statement of article
    body: "text",  //paragraph of article text
}

describe('Article 1st Test', () => {
    test('renders component without errors', ()=> {
        render(<Article article={testArticle}/>)
    });
}) 

describe('Article 2nd Test', () => {
    test('renders headline, author from the article when passed in through props', ()=> {
        render(<Article article={testArticle}/>)

        const headline = screen.getByText("headline");
        const author = screen.getByText("By author");

        expect(headline).toBeInTheDocument();
        expect(author).toBeInTheDocument();
    });
}) 

describe('Article 3rd Test', () => {
    test('renders "Associated Press" when no author is given', ()=> {
        render(<Article article={testArticle2}/>)

        const author = screen.getByText("By Associated Press");

        expect(author).toBeInTheDocument()
    });
}) 

describe('Article 4th Test', () => {
    test('executes handleDelete when the delete button is pressed', async ()=> {
        const displayFunc = jest.fn()

        render(<Article article={testArticle} handleDelete={displayFunc} />)

        const button = screen.getByTestId("deleteButton")
        userEvent.click(button);

        await waitFor(() => {
            expect(displayFunc).toHaveBeenCalled();
        })
    });
}) 





//Task List:
//1. Complete all above tests. Create test article data when needed.