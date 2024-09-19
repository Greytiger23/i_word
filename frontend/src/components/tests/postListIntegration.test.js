import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import postList from '../components/postList';

const mock = new MockAdapter(axios);

describe('PostList Component', () => {
    it('should display posts fetched from API', async () => {
        const posts = [{ _id: '1', title: 'First Post' }];
        mock.onGet('/api/posts').reply(200, posts);

        render(<postList />);

        await waitFor(() => {
            expect(screen.getByText('First Post')).toBeInTheDocument();
        });
    });

    it('should display error message on API failure', async () => {
        mock.onGet('/api/posts').reply(500);

        render(<postList />);

        await waitFor(() => {
            expect(screen.getByText('Error loading posts')).toBeInTheDocument();
        });
    });
});