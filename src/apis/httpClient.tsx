import { ResponseData } from '../types/data.type';
import axios from 'axios';

export default async function httpClient() {
  const { data } = await axios.get<ResponseData[]>('/data/mock_data.json');
  return data;
}
