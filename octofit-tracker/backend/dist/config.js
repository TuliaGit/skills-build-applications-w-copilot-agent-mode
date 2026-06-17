export const PORT = Number(process.env.PORT ?? 8000);
export const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/octofit_db";
const codespaceName = process.env.CODESPACE_NAME;
const protocol = codespaceName ? "https" : "http";
const host = codespaceName ? `${codespaceName}-8000.app.github.dev` : "localhost";
export const API_URL = process.env.API_URL || `${protocol}://${host}`;
//# sourceMappingURL=config.js.map