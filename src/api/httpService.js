import _ from 'lodash';
import http from './http';
import { isEmptyObject } from '../utils/util';

export default {
  accessAPI(opts) {
    const apiObj = opts.apiObj || {};
    const _method = apiObj.method;
    const _body = opts.body || {};
    const _path = opts.path;
    const _query = {};
    const _headers = {};

    let apiUrl = apiObj.url;
    if (_.isPlainObject(_path)) {
      Object.keys(_path).forEach((key) => {
        apiUrl = apiUrl.replace(`:${key}`, _path[key]);
      });
    }
    if (opts.query && !isEmptyObject(opts.query)) {
      Object.keys(opts.query).forEach((key) => {
        if (opts.query[key] !== '' && opts.query[key] !== undefined && opts.query[key] !== null) {
          _query[key] = opts.query[key];
        }
      });
    }
    return http({
      url: apiUrl,
      method: _method,
      params: _query,
      data: _body,
      headers: _headers
    });
  }
};
