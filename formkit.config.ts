// formkit.config.ts
import { id } from '@formkit/i18n'
import { DefaultConfigOptions } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
const config: DefaultConfigOptions = {
  locales: { id },
  locale: 'id',
//   config: {
//     classes: generateClasses({
//       global: { // applies to all input types
//         outer: 'SHAZAM'
//       },
//       text: { // only applies to text input type
//         outer: 'text-sm text-red-500',
//         input: '$reset input input-bordered w-full max-w-xs'
//       },
//       password: { // only applies to text input type
//         outer: 'bizz',
//         input: '$reset input input-bordered w-full max-w-xs'
//       },
//       submit: { // only applies to text input type
//         outer: 'btn btn-primary',
//         input: '$reset btn btn-primary'
//       },
//       email: { // only applies to email input type
//         outer: 'text-sm text-red-500',
//         input: '$reset input input-bordered w-full max-w-xs'
//       }
//     })
//   }
config: {
    classes: generateClasses({
      text: {
        outer: 'mb-5',
        label: 'block mb-1 font-bold text-sm',
        inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
        input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs'
      },
      password: {
        outer: 'mb-5',
        label: 'block mb-1 font-bold text-sm',
        inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
        input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
        help: 'text-xs text-gray-500',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs'
      },
      
      submit: {
        outer: 'btn btn-primary btn-sm',
      }
    })
  },
}

export default config