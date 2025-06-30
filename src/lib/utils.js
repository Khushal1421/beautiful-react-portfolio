import {clsx} from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn= (...inputs) =>{ //cn:-className:- tailwind merge 
     return twMerge(clsx(inputs));
}