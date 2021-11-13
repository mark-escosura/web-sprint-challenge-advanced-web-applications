import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import articleService from './../services/articleServices'
import View from './View';

jest.mock('./../services/articleServices');

describe ('View 1st Test', () => {
    test("renders zero articles without errors", async () => {
        articleService.mockResolvedValueOnce([]);
    
        render(<View/>);
    
        await waitFor (() => {
            const articles = screen.queryAllByTestId("article");
            expect(articles).toHaveLength(0);
        })
    });
})

describe ('View 2nd Test', () => {
    test("renders three articles without errors", async ()=> {
        articleService.mockResolvedValueOnce([ /* cant do it no more time*/]);
    });
})



test("renders three articles without errors", async ()=> {
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.