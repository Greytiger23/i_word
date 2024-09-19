import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchPosts } from '../services/api';

const mock = new MockAdapter(axios);

describe('API Service', () => {
    it('should fetch posts successfully', async () => {
        const posts = [{ _id: '1', title: 'Test Post' }];

        mock.onGet('/api/posts').reply(200, posts);

        const response = await fetchPosts();
        expect(response.data).toEqual(posts);
    });

    it('should handle fetch posts failure', async () => {
        mock.onGet('/api/posts').reply(500);

        try{
            await fetchPosts();
        } catch (error) {
            expect(error.response.status).toBe(500);
        }
    });
});