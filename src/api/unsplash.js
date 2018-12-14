import axios from 'axios';

const access_key = 'c96e97ad1e44cb17f66af900fff3cba59d7d770a49eececdde1a25f9f78280b8';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ' + access_key
  }
});
