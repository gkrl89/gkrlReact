import http from "./axios";
const getAll = () => {
  return http.get("/customer");
};
const get = id => {
  return http.get(`/customer/${id}`);
};
const create = data => {
  return http.post("/customer", data);
};
const update = (id, data) => {
  return http.put(`/customer/${id}`, data);
};
const remove = id => {
  return http.delete(`/customer/${id}`);
};

const CustService = {
  getAll,
  get,
  create,
  update,
  remove,
 };
export default CustService;
