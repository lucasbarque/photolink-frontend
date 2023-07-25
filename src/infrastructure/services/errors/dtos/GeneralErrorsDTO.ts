interface ErrorsValidationMessages {
  rule: string;
  field: string;
  message: string;
}

export interface GeneralErrorsDTO {
  message?: string;
  status: number;
  messages?: {
    errors: ErrorsValidationMessages[];
  };
}
