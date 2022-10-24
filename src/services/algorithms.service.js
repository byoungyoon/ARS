import http from "./http-common";

class AlgorithmsService {
  /**
   *
   * @param {number} page 현재 페이지
   * @param {number} select 누른 필터 (단, 0 = 전체)
   * @returns {count: number, rows: object} count(전체 페이지 수), rows(블록 정보)
   */
  findAll(page, select) {
    return http.get(`/algorithms?page=${page}&select=${select}`);
  }
  create(data) {
    return http.post("/algorithms", data);
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
