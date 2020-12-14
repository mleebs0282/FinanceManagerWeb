import http from "../api-request";

class BudgetService {
    get(id) {
		return http.get(`/budget/${id}`);
	}

	update(id, data) {
		return http.put(`/budget/${id}`, data);
	}
}

export default new BudgetService();