type Success = {
  status: "success";
  data: string;
};

type Error = {
  status: "error";
  message: string;
};

type Response = Success | Error;

function handleResponse(
  response: Response
) {
  if (response.status === "success") {
    console.log(response.data);
  } else {
    console.log(response.message);
  }
}