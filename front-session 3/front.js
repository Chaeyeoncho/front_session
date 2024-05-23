//

let id = "likelion";
let pw = "lovefrontend";

let str1 = prompt("아이디를 입력하세요");
let str2 = prompt("비밀번호를 입력하세요");

if (str1 === id && str2 === pw) {
  console.log("유저 반갑습니다");
} else if (str1 === id && str2 !== pw) {
  console.log("비밀번호가 틀렸습니다");
} else if (str1 !== id && str2 === pw) {
  console.log("아이디가 틀렸습니다");
}
