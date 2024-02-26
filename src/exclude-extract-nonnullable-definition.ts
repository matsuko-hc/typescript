export{};

// type MyExclude<T, U> = T extends U ? never : T;
// type MyExclude<T> = T extends string | number ? never : T;

// type MyExclude = 
// 	| (string extends string | number ? never : string)
// 	| (number extends string | number ? never : number)
// 	| (DebugType extends string | number ? never : DebugType);

// type MyExclude = | never |  never|  DebugType
type MyExclude = DebugType

//除外
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
//数字、文字列の型を除外
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

//*抽出
type FunctionTypeExtract = Extract<SomeTypes,DebugType>;

//*排除
//ユニオン型からnullやundefindを排除してくれる
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;

//既存の型を利用しつつ、新たな型をスピーディに用意できる