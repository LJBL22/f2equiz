import { Link, useRouteError } from 'react-router-dom';

export default function ErrorBoundary() {
  let error = useRouteError();
  return (
    <div className='text-3xl text-navy space-y-4'>
      <h1 className='text-6xl font-bold text-red tracking-wider'>
        Oops, something went wrong.
      </h1>
      <p>
        Error details: <i>{error.message}</i>
      </p>
      <p>
        Please return to the{' '}
        <Link to='/' className='font-semibold text-navy underline'>
          index page.
        </Link>
      </p>
    </div>
  );
}
