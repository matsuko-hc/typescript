export{};

const debugProfile = (name: string, age: number) => {
	console.log({ name , age })
}

debugProfile('Ann',12)

type Profile = Parameters<typeof debugProfile>;
const profile: Profile = ['Naa' , 30];
debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
