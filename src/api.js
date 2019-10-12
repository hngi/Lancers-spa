// import Vue from 'vue'
import Store from './store';
import axios from 'axios';

export const HNG = axios.create({
  // baseURL: ``,
  baseURL: process.env.BACKEND_URL,
  headers: {
    // 'content-type': '',
    // Authorization: 'Bearer {'+ Store.getters.getToken +'}'
  }
})