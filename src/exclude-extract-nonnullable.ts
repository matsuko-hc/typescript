export{};

//除外
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
//数字、文字列の型を除外
type FunctionType = Exclude<SomeTypes, string | number>;
//関数の型だけを除外
type NonfunctionType = Exclude<SomeTypes,DebugType>;
//関数の型だけを除外、別の方法
type typeExcludingFunction = Exclude<SomeTypes,Function>//Functionは関数の型の総称

//*抽出
type FunctionTypeExtract = Extract<SomeTypes,DebugType>;
type NonFunctionTypeExtract = Extract<SomeTypes,string | number>;
type FunctionTypeExtructFunction = Extract<SomeTypes,Function>;

//*排除
//ユニオン型からnullやundefindを排除してくれる
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;

//既存の型を利用しつつ、新たな型をスピーディに用意できる