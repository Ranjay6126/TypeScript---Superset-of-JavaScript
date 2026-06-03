type Success = {
    status: "success";
    data: string;
};

type Error = {
    status: "error";
    message: string;
};

type Response = Success | Error;

// another

function handle(res: Response) {
    if (res.status === "success") {
        console.log(res.data);
    }
}