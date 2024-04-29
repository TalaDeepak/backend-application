class ApiResponse {
  constructor(statusCode, data) {
    this.statusCode = statusCode;
    this.data = data;
    this.status = statusCode < 400 ? "success" : "fail";
  }
}
