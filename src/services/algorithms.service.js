import http from "./http-common";

class AlgorithmsService {
  create(data) {
    return http.post("/algorithms", data);
  }
  findAll(page, cd) {
    return http.get(`/algorithms?page=${page}&cd=${cd}`);
  }
  findOne(id) {
    return http.get(`/algorithms/${id}`);
  }
  update(id, data) {
    return http.put(`/algorithms/${id}`, data);
  }
  delete(id) {
    return http.delete(`/algorithms/${id}`);
  }
}

export default new AlgorithmsService();
