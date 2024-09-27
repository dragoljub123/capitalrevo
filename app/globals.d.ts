// globals.d.ts
declare global {
    interface Window {
      grecaptcha: any; // You can specify a more precise type if you want.
    }
  }
  
  export {}; // This line makes the file a module and prevents it from being treated as global scope.
  