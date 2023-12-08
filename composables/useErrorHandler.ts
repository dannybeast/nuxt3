interface IError {
  status: number;
  message: string;
  data: string;
}

export function useErrorHandler() {
  const { $toast } = useNuxtApp();

  const errorHandler = (error: IError) => {
    $toast.add({
      severity: "error",
      summary: `Error ${error.status} - ${error.data}`,
      detail: error.message,
      life: 5000,
    });
  };

  return errorHandler;
}
