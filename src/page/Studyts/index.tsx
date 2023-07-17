// import * as S from './example.scss';

// type vs interface
  // primitive types
  export type TypeTest = undefined | null;
  export type Fruit = 'apple' | 'banana' | 'orange';

  // Tuples
  export const array: [number, string, boolean] = [1, '', false];

  type RowProps = [colOne: number, colTwo: number];
  export const row: RowProps = [1, 1];

  // Functions
  export type TakeAwayProps = (numberOne: number, numberTwo: number) => number;

  export interface TAwayProps {
    (numberOne: number, numberTwo: number): number
  };

  // Union Types
  export type FruitProps = 'apple' | 'banana' | 'orange';

  // Mapped Types
  // type Fruit = 'apple' | 'banana' | 'orange';
  type FruitCount = {
    [key in Fruit]: number;
  };
  export const fruits: FruitCount = {
    banana: 1,
    apple: 2,
    orange: 3
  };

  // When to use Interface?
  // All cases when the usage of type isn't a obligation!
  export interface Bird {
    fly(): void;
    sleep(): void;
  };
  // class Dove implements Bird {}

  // Declaration Merging
  interface Car {
    size: number;
    run(): void;
  }
  interface Car {
    color: string;
  }
  export const car: Car = {
    size: 1,
    color: 'red',
    run: () => {
      console.log('running');
    }
  }

type SumProps = {
  a: number,
  b: number,
  c: number,
  d: number
}
type ReturnSumProps = {
  sum: number,
  rest: number
}
/**
 * 
 * @param param SumProps
 * @returns ReturnSumProps
 * @example handleFunction({ a: 1, b: 2, c: 3, d: 4 })
 * @description Receive data from user to use in the app
 */
export const handleFunction = ({ a, b, c, d }: SumProps): ReturnSumProps => {
  return {
    sum: a + b,
    rest: c + d,
  };
}

handleFunction({
  a: 1,
  b: 2,
  c: 3,
  d: 4,
})


//----------------------
// 1- void VS never
// 2- opcional VS void
// 3- opcional VS undefined

 // 1
type ExampleProps = {
  param: () => void;
  param2: () => never;
}

function returnNever(): never {
  throw new Error('error');
}

export const example: ExampleProps = {
  param: () => console.log('void'), // aceita void e undefined
  param2: returnNever,
}

// 2
type ExampleProps2 = {
  params?: string;
  params2: void | string;
}

export const example2: ExampleProps2 = {
  params2: undefined,
}

// 3
type ExampleProps3 = {
  params?: string;
  params2: undefined | string;
}

export const example3: ExampleProps3 = {
  params: 'string', // opcional
  params2: undefined,
}

export const arrayNumber: number[] = [1,2,3,4,5]
export const tuple: [string, number, string, boolean] = ['string', 1, 'string', false];
export const tuple2: [string, string, string, string] = ['string', 'string', 'string', 'string'];


tuple.map((item, index) => console.log(`[${index}] - ${typeof item}`));
let everyArray = tuple.every((item) => item === typeof 'boolean');
console.log(everyArray);

let everyArray2 = tuple2.some(item => item === typeof 'string');
console.log(everyArray2)

type PeopleProps = {
  name: string;
  phone?: number | undefined;
}

const people: PeopleProps = {
  name: 'Lucas',
  phone: 123456
}
console.log(people)


// generics more descripted
export type Response<TData, TError> = {
  data: TData,
  error: TError
};

// Do not put type's name in plural
export type Route = '/user' | '/home';
const route1: Route = '/home'
console.log(route1);


// Avoid Using Prefixes -> TUser / IUser
export type User = {
  id: number,
  name: string,
}




const Studyts = (props: { title: string }) => {

  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  )
}

export default Studyts;