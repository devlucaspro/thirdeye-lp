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
  // Polimorfismo
  export interface Bird {
    fly(): void;
    sleep(): void;
  };

  // class Dove implements Bird {
  //   // ...
  // }

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


// NameProps = {}
type CardProps = {
  title: string,
  description?: string,
  img?: string,
  hasButton?: boolean,
  hasDescription?: boolean,
  textButton?: string,
}

const Studyts = ({ 
  title = '', 
  description = '', 
  img = '',
  hasButton = false,
  textButton = 'Comprar',
}: CardProps) => {

  return (
    <div>
      <img src={img} alt="Photo" />
      <h4>{title}</h4>
      <p>{description}</p>
      {hasButton && <button>{textButton}</button>}
    </div>
  )
}

export default Studyts;