export class AppError extends Error {
    public statusCode;
    public message;
    
	constructor(
		statusCode: number,
		message: string,
	) {
		super(message);
        this.statusCode = statusCode;
        this.message = message;
	}
}
