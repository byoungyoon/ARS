import http from "./http-common";

class TagService {
  findAll() {
    return http.get(`/tag`);
  }
}

export default new TagService();
