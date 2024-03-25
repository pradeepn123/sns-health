import { writable } from 'svelte/store';

export const searchQuery = writable('');

export const updateSearchQuery = (query) => {
    searchQuery.update(data => {data = query; return data;})
}