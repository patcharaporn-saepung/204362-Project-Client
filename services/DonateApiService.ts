import { AxiosResponse } from 'axios';
import a, { headerWriter } from './_axios';
import Donate from '@/models/donate';

function getDonateList($store: any): Promise<AxiosResponse<Donate[]>> {
  return a.get('api/donate/list', headerWriter($store));
}

function getDonate($store: any, id: string): Promise<AxiosResponse<Donate>> {
  return a.get(`api/donate/${id}`, headerWriter($store));
}

function postDonate($store: any, don: Donate): Promise<AxiosResponse<Donate>> {
  return a.post('api/donate', don, headerWriter($store));
}

function delDonate($store: any, id: string): Promise<AxiosResponse<Donate>> {
  return a.delete(`api/donate/${id}`, headerWriter($store));
}

function putDonate($store: any, id: string, don: Donate): Promise<AxiosResponse<Donate>> {
  return a.put(`api/donate/${id}`, don, headerWriter($store));
}

export default {
  getDonateList,
  getDonate,
  postDonate,
  delDonate,
  putDonate,
};
