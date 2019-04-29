
enum Status {
    Uploading,
    Success,
    Failed,
}
console.log(Status.Uploading)

const test = 1;
enum Status2 {
    Uploading = 3,
    Success = test,
    Failed = 5,
}
console.log(Status2.Success)

enum Message {
    Error = 'Sorry, error',
    Success = 'Hoho, success',
    Failed = Error,
}
console.log(Message)

enum Result {
    Failed = 0,
    Success = 'success',
}

enum Animals {
    Dog = 1,
    Cat = 2 ,
}
interface Dog {
    type: Animals.Dog
}
// const dog: Dog = {
//     // type: Animals.Cat
// }

enum Status {
    Off = 0,
    On,
}

interface Light {
    status: Status,
    // and: Status
}

const light: Light = {
    status: Status.On,
    // and: Animals.Dog,
}
