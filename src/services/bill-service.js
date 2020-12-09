import http from "../api-request";

class BillService {
	getAll() {
		return http.get("/bill");
	}

	get(id) {
		return http.get(`/bill/${id}`);
	}

	create(data) {
		return http.post("/bill", data);
	}

	update(id, data) {
		return http.put(`/bill/${id}`, data);
	}

	delete(id) {
		return http.delete(`/bill/${id}`);
	}
}

export default new BillService();