import { AppError } from './app-error';

export class BadInput extends AppError {
    constructor(public errorData: any) {
        super()
    }
}