export{};

let name:any = "Ann";
// let length = (name as string).length ;
let length = <string>(name).length ;
length = "foo"

//アサーションにはasを使う方法と<>を使う方法の２通りがある。asを使う方が主流