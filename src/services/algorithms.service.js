import http from "./http-common";

class AlgorithmsService {
  create(data) {
    return http.post("/algorithms", data);
  }
  findAll() {
    return http.get("/algorithms");
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
